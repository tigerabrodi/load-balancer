# Load Balancer from scratch

# OSI Seven Layer Network Model

1. **Physical Layer**: Deals with the physical transmission of data over network cables or wireless signals.

2. **Data Link Layer**: Manages data framing, addressing and error detection at the hardware level.

3. **Network Layer**: Handles routing and logical addressing (e.g., IP addresses) to find the best path for data.

4. **Transport Layer**: Ensures reliable communication and end-to-end data delivery, using protocols like TCP and UDP.

5. **Session Layer**: Manages communication sessions, including establishment, maintenance, and termination.

6. **Presentation Layer**: Focuses on data formatting, encryption, and compression.

7. **Application Layer**: Deals with application-level protocols and data, like HTTP for web browsing, enabling user interaction with software and services.

# http-proxy in node

`http-proxy` is a Node.js library that allows you to create HTTP proxy servers.

A proxy server simply forwards client HTTP requests to other servers and returns the response back to the client.

# What is a Load Balancer?

Think of a busy crossing with cars coming from many directions. A traffic cop stands in the center, guiding cars to different roads to avoid traffic jams. In the same way, a load balancer works like the traffic cop. It spreads incoming network or application traffic among several servers so that no single server gets too busy, preventing network data flow from getting stuck.

## Key Points

- **Traffic Distribution**: Distributes incoming network or application traffic across multiple servers.
- **Efficiency and Speed**: Ensures efficient processing by preventing any single server from becoming a bottleneck.
- **High Availability**: Increases the availability of applications by redistributing load during server failure or maintenance.
- **Scalability**: Allows for scaling of applications by adding more servers without disrupting the service.

# Load balancer algorithms

6 common load balancing algorithms:

- application layer
- different levels of OSI seven layer network model
- listen for incoming connections and forward them to a single server
- round robin
- load balancing algorithms
- starting multiple servers node.js
- health check, periodically, specify health check url
- health check should be a background task concurrently to handling the requests
- http-proxy
