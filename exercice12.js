const produits = [
  { nom: "Clavier", prixHT: 250 },
  { nom: "Souris", prixHT: 90 },
  { nom: "Écran", prixHT: 1400 },
];
const noms = produits.map((produit) => produit.nom);
console.log(noms);
const produitsTTC = produits.map((produit) => ({
  nom: produit.nom,
  prixHT: produit.prixHT,
  prixTTC: produit.prixHT * 1.2,
}));
console.log(produits);
const textes = produitsTTC.map(
  (produit) => produit.nom + ":" + produit.prixTTC + "DH TTC",
);
const liste = document.querySelector("#etiquettes");
textes.forEach((texte) => {
  const li = document.createElement("li");
  li.textContent = text;
  liste.append(li);
});
const method = produits.forEach((produit) => {
  console.log(produit.nom);
});
console.log(method);
// when u use for each it says undefined
