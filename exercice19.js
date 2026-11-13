const CLE = "taches";
const form = document.querySelector("#form");
const liste = document.querySelector("#taches");
const boutonVider = document.querySelector("#vider");
const taches = JSON.parse(localStorage.getItem(CLE)) || [];

function sauvegarder() {
  localStorage.setItem(CLE, JSON.stringify(taches));
  afficher();
}
function afficher() {
  liste.innerHTML = taches
    .map(
      (t) => `
        <li class="flex items-center gap-2" data-id="${t.id}">
          <span data-action="basculer"
                class="flex-1 cursor-pointer ${t.faite ? "line-through text-gray-400" : ""}">${t.titre}</span>
          <button data-action="supprimer" class="text-red-600">✕</button>
        </li>`,
    )
    .join("");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = form.elements.titre;
  const titre = input.value.trim();
  if (!titre) return;
});

liste.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  const id = Number(li.dataset.id);

  if (e.target.dataset.action === "supprimer") {
    taches = taches.filter((t) => t.id !== id);
  } else {
    taches = taches.map((t) => (t.id === id ? { ...t, faite: !t.faite } : t));
  }
  sauvegarder();
});

boutonVider.addEventListener("click", () => {
  taches = [];
  localStorage.removeItem(CLE);
  afficher();
});
afficher();
