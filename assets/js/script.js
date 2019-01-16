//1ere Methode : 3 fonctions permettant de changer la couleur du texte
/*function colorGreen() {
    document.getElementById("text").style.color = "green";
}
function colorRed() {
    document.getElementById("text").style.color = "red";
}
function colorBlue() {
    document.getElementById("text").style.color = "blue";
}
2eme methode :
    function colorTxt(text) {
    var color = text.className.split(" "); //on sépare le nom de la class ""color green devient "color", "green"
    document.getElementById("text").style.color = color[1]; // deuxieme nom de la class
}*/
function colorTxt(colorText) {
    document.getElementById("text").style.color = colorText;
}