reponame = "pokerby";
  var getPokeUrl = function(poke, base) {
  return (base + reponame + "/pokemon/" + poke);
}
document.getElementById("submitpoke").addEventListener("click", function() {
  var theBase = document.querySelectorAll("base")[0].getAttribute("href");
  alert(getPokeUrl(document.getElementById("poke").value, theBase));
});
