var toappendto = document.getElementsByClassName("contentbck")[0];
var theurl = "https://pokewhat.github.io/pokerby/search.html";
function loadFile(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url, true);
  xhr.send('');
}
//  toappendto.insertAdjacentHTML("beforeend", event.target.result);

loadFile(theurl, function(response) {
  console.log(response);
  
});
