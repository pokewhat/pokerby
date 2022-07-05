var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var getBlob = async function(urlparam) {
  var toReturn = null;
  let theblob = await fetch(urlparam).then((value) => {
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
