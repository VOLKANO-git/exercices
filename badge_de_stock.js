const stock = 0;
const badge = document.querySelector("#badge");
if (stock > 0) {
  badge.textContent = "disponible";
  badge.classList.add("bg-green-200");
} else if (stock <= 3) {
  badge.textContent = "presque epuise";
  badge.classList.add("bg-yellow-200");
} else {
  badge.textContent = "rapture";
  badge.classList.add("bg-red-200");
}
badge.textContent = stock > 0 ? "disponible" : "rupture";
