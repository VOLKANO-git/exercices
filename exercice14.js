const bouttons = document.querySelectorAll("#choix");
const apercu = document.querySelector("#apercu");
const info = document.querySelector("#info");
bouttons.forEach((boutton) => {
  console.log(boutton.dataset);
});
const couleur = bouton.dataset.couleur;
info.textContent = "Couleur choisie : rouge " + nom;
let derniereCouleur = "";
if (derniereCouleur !== "") {
  apercu.classList.remove(derniereCouleur);
  apercu.classList.add(couleur);
  derniereCouleur = couleur;
}
