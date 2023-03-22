//ordinary JS file
var _start=null;
console.log("simple.js loaded");
function myfetch(url) {
  _start=performance.now();
  fetch(url)
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }).then(function(response) {
    appendMessage(`fetch ok url:${url}..waiting for data...`);
    return response.arrayBuffer();
  }).then(function(buf) {
    let t=performance.now()-_start;
    appendMessage(`data ready url:${url},len:${buf.byteLength},time:${t}`);
  })
  .catch(function(error) {
    appendMessage(`fetch error url:${url},error:${error}`);
  });
}
//preload the 2nd page for offline caching
myfetch("test2.html"); //add a query param in the update case

function appendMessage(msg) {
  console.log(msg);
  var divStr = `<div>${msg}</div>`;
  document.getElementsByTagName('body')[0].innerHTML += divStr;
}
