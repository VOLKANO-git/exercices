const CLE = "depenses";
const depenses = [];
const form = document.querySelector("#form");
const liste = document.querySelector("#liste");
const total = document.querySelector("#total");

function sauvegarder() {
  localStorage.setItem(CLE, JSON.stringify(depenses));
  afficher();
}

function afficher() {
  liste.innerHTML = depenses
    .map(
      (d) => `<li>${d.libelle} : ${d.montant} DH
          <button data-id="${d.id}" class="text-red-600 ml-2">✕</button></li>`,
    )
    .join("");
 total.textContent = depenses.reduce((somme, d) => somme + d.montant, 0);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const libelle = form.elements.libelle.value.trim();
  const montant = Number(form.elements.montant.value);
  if (!libelle || montant <= 0) return;
  depenses = [...depenses, { id: Date.now(), libelle, montant }];
  form.reset();
  ~sauvegarder();
});

liste.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const id = Number(e.target.dataset.id);
  depenses = depenses.filter((d) => d.id !== id);
  sauvegarder();
});

afficher();
