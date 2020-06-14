# websocket-example
We have built the server and client that connects to our WebSocket server and receives messages from the server. The message will contain the total connection count from the server.

Type the following command that will install a WebSocket server. We need to install it into server directory:

`npm install --save ws`

Lets test our code. First, you need to run the node server with our server.js code using `node server.js` in the server directory in the terminal.

Type the following command to execute the server:

`node server.js`

You should get the following result if this works:

`$ node server.js`

`WebSocket server is running.

Listening to port 8000.`

Next, open the index.html file in the client directory, in a web browser twice so that we have two client instances running side by side.
Inspect the server terminal. There should be log messages indicating the connection information and the total connection count.
In the two web browsers, open the console in Developer Tools. You should also see the WebSocket connection established message in the console.


