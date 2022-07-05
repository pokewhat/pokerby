var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html"
toreadhtml.onload = function(event) {
  toappendto.insertAdjacentHTML("beforeend", event.target.result);
};
let theblob = await fetch(theurl).then(r => r.blob());
toreadhtml.readAsText(theblob);
