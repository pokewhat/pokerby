var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var requestData = async function(urlparam) {
  let req = fetch(urlparam);
  return req;
};
toreadhtml.onload = function(event) {
  toappendto.insertAdjacentHTML("beforeend", event.target.result);
};
let thereq = requestData(theurl);
console.log(thereq);
thereq.then(
  (value) => {
    toreadhtml.readAsText(value.blob());
  }, function() {
    console.log("Blob gather failed...");
  }
);
