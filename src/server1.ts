import http from 'http'

import { FIRST_SERVER_PORT } from './constants'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Response from Server 1\n')
})

server.listen(FIRST_SERVER_PORT, () => {
  console.log(`Server 1 running at http://localhost:${FIRST_SERVER_PORT}/`)
})
