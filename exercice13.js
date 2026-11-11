const produits = [
  { nom: "Clavier", prix: 250, stock: 4 },
  { nom: "Souris", prix: 90, stock: 0 },
  { nom: "Écran", prix: 1400, stock: 2 },
  { nom: "Tapis", prix: 60, stock: 12 },
];
function afficher(tableau) {
  tableau.forEach((produit) => {
    const li = document.createElement("li");
    li.textContent = produit.nom + "-" + produit.prix + "DH";
    liste.append(li);
  });
  afficher(produits);
  document.querySelector("#stock").addEventListener("click",()=>{
    afficher(produits.filter((produit) => produit.stock > 0));
  });
  document.querySelector("#petitPrix").addEventListener("click",()=>{
    afficher(produits.filter((produit) => produit.prix < 200));
  });
    document.querySelector("#combo").addEventListener("click",()=>{
    afficher(produits.filter((produit) => produit.stock > 0 && produit.prix < 200));
  });
    document.querySelector("#tous").addEventListener("click",()=>{
    afficher(produits);
  });
   console.log(produits);
}
