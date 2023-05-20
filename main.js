var loupe = document.getElementById("loupe");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var context2 = loupe.getContext("2d");
var taille = 200; // taille en pixels de la loupe

// Chargement de l'image
// Création de l'objet Image
var imageObj = new Image();

// Définition de la source
imageObj.src = "./portrait_femme.jpg";
imageObj.onload = function () {
  // On redimensionne
  context.drawImage(this, 0, 0, 578, 400);
  pixelcopy(0, 0);
};

function pixelcopy(x, y) {
  var imageLoupe = context.getImageData(x, y, taille, taille);
  context2.putImageData(imageLoupe, 0, 0);
}

// Gestionnaire de souris pour le déplacement
canvas.onmousemove = function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  // petit calcul pour centrer la portion d'image montré
  x -= taille / 2;
  y -= taille / 2;
  pixelcopy(x, y);
};
