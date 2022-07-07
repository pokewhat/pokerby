reponame = "pokerby";
var loadItAll = function() {
  if(!(!(document.getElementById("submitpoke") == undefined) || !(document.getElementById("poke") == undefined) || !(document.querySelectorAll("base")[0] == undefined))) {
    this();
    return;
  }
  var getPokeUrl = function(poke, base) {
    return (base + reponame + "/pokemon/" + poke);
  };
  document.getElementById("submitpoke").addEventListener("click", function() {
    var theBase = document.querySelectorAll("base")[0].getAttribute("href");
    window.location.href = (getPokeUrl(document.getElementById("poke").value, theBase));
  });
};
