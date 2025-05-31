var titulo = document.getElementById("logo");

//console.log(titulo);

//getElementsByName
var paragrafos = document.getElementsByName("p")

console.log(paragrafos);

//getElementsByClassName

var texto  = document.getElementsByClassName("texto");

console.log(texto);

//querySelectorAll
var topo  = document.querySelectorAll("header")[0];

topo.style.backgroundColor = 'pink';
