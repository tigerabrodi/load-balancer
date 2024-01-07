import http from 'http'

import { SECOND_SERVER_PORT } from './constants'

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Response from Server 2\n')
})

server.listen(SECOND_SERVER_PORT, () => {
  console.log(`Server 2 running at http://localhost:${SECOND_SERVER_PORT}/`)
})
