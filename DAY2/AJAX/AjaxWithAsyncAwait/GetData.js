function GetData() {
    // return new Promise(function(resolve, reject){
    //    resolve("Sucess !");
    // })
    return new Promise(function(resolve, reject) {
    let xMLHttpRequest = new XMLHttpRequest();
    //https://jsonplaceholder.typicode.com -  TEST
    xMLHttpRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xMLHttpRequest.onreadystatechange = function() {
        if(xMLHttpRequest.readyState == 4 && xMLHttpRequest.status ==200) {
            resolve(xMLHttpRequest.responseText);
        } else if(xMLHttpRequest.readyState ==4 && xMLHttpRequest.status !=200){
            reject("something went wrong")
        }
    };
    xMLHttpRequest.send(); // places the async request - same as setTimeout
});
}