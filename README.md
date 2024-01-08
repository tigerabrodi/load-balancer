# Load Balancer from scratch

Built a load balancer from scratch. Includes Round Robin algorithm and health check. 🤘

## How to try it

Clone it.

Run `npm install`.

Open 4 different terminals.

1. Start load balancer: `npm run load-balancer`
2. Start first server: `npm run first-server`
3. Start second server: `npm run second-server`
4. In the last terminal, use `curl` to test the load balancer. Simply enter `curl http://localhost:3000`.

You should see responses alternate. Server 1, then Server 2.

Health check happens every 10th second. They're done in the background.

Feel free to shut down one of the servers and play around with the code. 💪

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

1. **Round Robin**

   - **Analogy**: Like taking turns in a game. Each server gets a request in turn.
   - **How it Works**: Requests are distributed sequentially and equally across the servers. Once the last server is reached, it starts again from the first.
   - **Best For**: Environments where servers are of approximately equal capacity.

2. **Least Connections**

   - **Analogy**: Like a new cashier opening a lane for customers with fewer items.
   - **How it Works**: Directs traffic to the server with the fewest active connections. Ideal for long-lived connections.
   - **Best For**: Situations where sessions have varying lengths.

3. **Least Response Time**

   - **Analogy**: Like choosing the shortest line in a grocery store based on both the number of people and their cart sizes.
   - **How it Works**: Sends requests to the server with the least active connections and the lowest average response time.
   - **Best For**: Ensuring fast response times.

4. **Hash-Based**

   - **Analogy**: Like assigning students to groups based on their last names.
   - **How it Works**: Uses a unique key (like IP address or session ID) to direct traffic, ensuring that a particular user is consistently sent to the same server.
   - **Best For**: Maintaining user session persistence.

5. **IP Hash**

   - **Analogy**: Like assigning parking spaces based on car license plate numbers.
   - **How it Works**: Uses the IP address of the client to determine which server receives the request.
   - **Best For**: Environments where session persistence is important.

6. **Weighted Load Balancing**
   - **Analogy**: Like giving more tasks to more capable team members.
   - **How it Works**: Assigns weights to servers based on their capacity. Servers with higher capacities handle more requests.
   - **Best For**: Networks with servers of varying capacities.
