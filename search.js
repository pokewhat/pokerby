var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var requestData = async function(urlparam) {
  let req = fetch(url);
  return req;
};
toreadhtml.onload = function(event) {
  toappendto.insertAdjacentHTML("beforeend", event.target.result);
};
let thereq = requestData(theurl);
console.log(theblob);
thereq.then(
  (value) => {
    toreadhtml.readAsText(theblob);
  }, function() {
    console.log("Blob gather failed...");
  }
);
