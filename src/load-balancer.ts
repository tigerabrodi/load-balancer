import http from 'http'

import httpProxy from 'http-proxy'

import { FIRST_SERVER_PORT, SECOND_SERVER_PORT } from './constants'

// Original list of servers
const allServers = [
  `http://localhost:${FIRST_SERVER_PORT}`,
  `http://localhost:${SECOND_SERVER_PORT}`,
]

let healthyServers = [...allServers]
let currentServer = 0

// Proxy serves as the load balancer
const proxy = httpProxy.createProxyServer({})

// Health check function
function checkServerHealth(server: string) {
  return new Promise((resolve) => {
    http
      .get(server, (res) => {
        if (res.statusCode === 200) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
      .on('error', () => {
        resolve(false)
      })
  })
}

async function performHealthChecks() {
  const healthStatus = await Promise.all(allServers.map(checkServerHealth))
  healthyServers = allServers.filter((_, index) => healthStatus[index])
}

// Periodically check the health of all servers
setInterval(() => {
  performHealthChecks()
    .then(() => {
      console.log('Health check performed')
    })
    .catch((err) => {
      console.error('Health check failed', err)
    })
}, 10000) // Every 10 seconds

// Round Robin algorithm for healthy servers
function getNextServer() {
  if (healthyServers.length === 0) return null

  const server = healthyServers[currentServer % healthyServers.length]
  currentServer = (currentServer + 1) % healthyServers.length
  return server
}

const server = http.createServer((req, res) => {
  const target = getNextServer()

  if (target) {
    proxy.web(req, res, { target })
  } else {
    res.writeHead(502) // Bad Gateway
    res.end('No healthy backends available to handle the request.')
  }
})

console.log('Load balancer started on port 3000')
server.listen(3000)
