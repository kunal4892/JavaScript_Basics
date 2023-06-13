
function GetData(callback) {
    console.log("Ajax logic here");
    // 1. Instantiate XMLHttpRequest.
    // 2. Open a connection.
    // 3. Register on an event - onreadystatechange
    // 4. XMLHttpRequest.send()

    // The browser provides this method to us
    let xMLHttpRequest = new XMLHttpRequest();
    //https://jsonplaceholder.typicode.com -  TEST
    xMLHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xMLHttpRequest.onreadystatechange = function() {
        if(xMLHttpRequest.readyState == 4 && xMLHttpRequest.status ==200) {
            // console.log(xMLHttpRequest.responseText);
            callback(null, xMLHttpRequest.responseText);
        } else if(xMLHttpRequest.readyState ==4 && xMLHttpRequest.status !=200){
            callback("something went wrong", xMLHttpRequest.statusText, null)
        }
    };
    xMLHttpRequest.send(); // places the async request - same as setTimeout
}
