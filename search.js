var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var getPromise = async function(urlparam) {
  var p1 = await fetch(urlparam);
  return p1;
};
var getBlob = async function(urlparam) {
  var toReturn = null;
  getPromise(urlparam).then((value) => {
    toReturn = value.blob();
    return toReturn;
  }, function() {
    toReturn = null;
    return toReturn;
  });
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
