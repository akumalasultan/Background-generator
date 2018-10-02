var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomColor1 = document.getElementById("random-color1");
var randomColor2 = document.getElementById("random-color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setColor(num, color) {
	if (color === '') {color = getRandomColor();}
	if (num === 1) {
		document.getElementsByClassName("color1")[0].value=color;
	} else if (num === 2) {
		document.getElementsByClassName("color2")[0].value=color;
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor1.addEventListener("click", function(){
	setColor(1, ''); setGradient();
});

randomColor2.addEventListener("click", function(){
	setColor(2, ''); setGradient();
});