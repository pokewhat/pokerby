var theurl = "https://pokewhat.github.io/pokerby/search.html";
var theurl2 = "https://pokewhat.github.io/pokerby/getSearchButtons.js";

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
document.addEventListener("DOMContentLoaded", function() {
  var toappendto = document.getElementsByClassName("contentbck")[0];
  loadFile(theurl, function(response) {
    console.log(response);
    toappendto.insertAdjacentHTML("beforeend", response);
  });
  loadFile(theurl2, function(response) {
    console.log(response);
    eval(response);
  });
});
