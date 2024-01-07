import http from 'http'

import httpProxy from 'http-proxy'

import { FIRST_SERVER_PORT, SECOND_SERVER_PORT } from './constants'

// Original list of servers
const allServers = [
  `http://localhost:${FIRST_SERVER_PORT}`,
  `http://localhost:${SECOND_SERVER_PORT}`,
]
let currentServer = 0

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({})

// Round Robin algorithm
function getNextServer() {
  const next = allServers[currentServer]
  currentServer = (currentServer + 1) % allServers.length
  return next
}

// Create your server
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
