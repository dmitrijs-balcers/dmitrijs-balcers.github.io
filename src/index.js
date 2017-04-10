var w;
var webWorker1Result = document.getElementsByClassName("web-worker1-result")[0];

if(typeof(Worker) !== "undefined") {
  if(typeof(w) === "undefined") {
    w = new Worker("src/web-workers/index.js");
  }
  w.onmessage = function(e) {
    webWorker1Result.innerHTML = e.data;
  };
} else {
  console.error("This browser does not support Web Workers. You really should update your browser.");
}