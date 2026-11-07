console.log('JS connecté');
const nom = "Clavier";
let prix = 250;
const n = document.getElementById("nom");
const price = document.getElementById("prix");
prix = 199 ;
// nom = "mouse";
n.textContent =  nom;
price.textContent = prix + "DH";
// cant change the variable of a const or else the console will show an error