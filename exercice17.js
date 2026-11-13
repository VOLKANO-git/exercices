const panier = [
  { id: 1, nom: "Clavier", prix: 250, quantite: 1 },
  { id: 2, nom: "Souris", prix: 90, quantite: 2 },
  { id: 3, nom: "Câble", prix: 35, quantite: 3 },
];
const liste = document.querySelector("#panier");
const elTotal = document.querySelector("#total");
const elNb = document.querySelector("#nbArticles");
function rendre() {
  liste.innerHTML =
    panier.length === 0
"<li>ton panier est vide</li>"
    panier.map((a) => 
        `<li 
        data-id="${a.id}">
        <span>${a.nom}</span> — ${a.prix} DH * ${a.quantite} = ${a.prix * a.quantite} DH
        <button data-action="moins">-</button>
        <button data-action="plus">+</button>
        </li>`,)
.join("");

  const total = panier.reduce((acc, a) => acc + a.prix * a.quantite, 0);
  const nb = panier.reduce((acc, a) => acc + a.quantite, 0);
  elTotal.textContent = total;
  elNb.textContent = nb;
}


liste.addEventListener("click", (e) => {
  const bouton = e.target.closest("button");
  if (!bouton) return;

  const id = Number(bouton.closest("li").dataset.id);
  const index = panier.findIndex((a) => a.id === id);
  const article = panier[index];

if (bouton.dataset.action === 'plus') {
  article.quantite++;
} else {
  article.quantite--;
}
  rendre();
});
