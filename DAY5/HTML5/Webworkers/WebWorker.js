onmessage = function (msgFromMainThread) {
    // No window or document
    // console.log(window);
    // console.log(document);
    // Seque into service worker
    console.log(msgFromMainThread.data);
    let arr = [];
    for (let index = 0; index < 10000; index++) {
      arr[index] = [];
      for (let j = 0; j < 15000; j++) {
        arr[index][j] = Math.random();
      }
    }
    postMessage(arr[3000][4000]);
  };