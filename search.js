var toappendto = document.getElementsByClassName("contentbck")[0];
var toreadhtml = new FileReader();
var theurl = "https://pokewhat.github.io/pokerby/search.html";
var getBlob = async function(urlparam) {
  let theblob = await fetch(urlparam).then(r => r.blob());
  theblob.then((value) => {
    return value;
  }, function() {
    return null;
  });
};
toreadhtml.onload = function(event) {
  toappendto.insertAdjacentHTML("beforeend", event.target.result);
};
let theblob = getBlob(theurl);
if(theblob !== null) {
  console.log(theblob);
  toreadhtml.readAsText(theblob);
} else {
  console.log("Blob gather failed...");
}
