var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var requestData = async function(urlparam) {
  let blob = fetch(url).then(r => r.blob());
  return blob;
};
toreadhtml.onload = function(event) {
  toappendto.insertAdjacentHTML("beforeend", event.target.result);
};
let theblob = getBlob(theurl);
console.log(theblob);
if(theblob !== null && typeof(theblob) == 'Blob') {
  toreadhtml.readAsText(theblob);
} else {
  console.log("Blob gather failed...");
}
