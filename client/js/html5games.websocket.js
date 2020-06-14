
var websocket = {
}

// init script when the DOM is ready.
$(function(){
	// check if existence of WebSockets in browser
	if (window["WebSocket"]) {

		// create connection
		websocket.socket = new WebSocket("ws://localhost:8000");

		// on open event
		websocket.socket.onopen = function(e) {
			console.log('WebSocket connection established.');
		};

		// on message event
		websocket.socket.onmessage = function(e) {
			console.log(e.data);
		};

		// on close event
		websocket.socket.onclose = function(e) {
			console.log('WebSocket connection closed.');
		};
	}
});
