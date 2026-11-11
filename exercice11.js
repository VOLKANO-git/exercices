const message = document.querySelector("#message");
message.addEventListener("input", () => {
  const counter = document.querySelector("#compteur");
  const MAX = 50;
  counter.textContent = longeur + "/" + MAX;
  counter.classList.toggle("text-red-200", longeur > MAX);
  counter.classList.toggle("text-grey-200", longeur <= MAX);
  envoyer.disabled = longeur === 0 || longeur > MAX;
});
message.addEventListener("change", () => {
  const counter = document.querySelector("#compteur");
  const MAX = 50;
  counter.textContent = longeur + "/" + MAX;
  counter.classList.toggle("text-red-200", longeur > MAX);
  counter.classList.toggle("text-grey-200", longeur <= MAX);
  envoyer.disabled = longeur === 0 || longeur > MAX;
});
const longueur = message.value.trim();
