const produits = [
  { id: 1, nom: "Clavier", prix: 250, stock: 4 },
  { id: 2, nom: "Souris", prix: 90, stock: 0 },
  { id: 3, nom: "Écran", prix: 1400, stock: 2 },
  { id: 4, nom: "Casque", prix: 600, stock: 0 },
];
const reponse = document.querySelector("#reponse");

document.querySelectorAll(".q").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const question = bouton.dataset.question;

    switch (question) {
      case "1":
        const produit = produits.find((p) => p.id === 3);
        reponse.textContent = produit ? produit.nom : "Aucun produit trouvé.";
        break;

      case "2":
        const rupture = produits.filter((p) => p.stock === 0);
        reponse.textContent = rupture.map((p) => p.nom).join(", ");
        break;

      case "3":
        const auMoinsUneRupture = produits.some((p) => p.stock === 0);
        reponse.textContent = auMoinsUneRupture ? "Oui" : "Non";
        break;

      case "4":
        const tousMoinsDe2000 = produits.every((p) => p.prix < 2000);
        reponse.textContent = tousMoinsDe2000 ? "Oui" : "Non";
        break;

      case "5":
        const tropCher = produits.find((p) => p.prix > 5000);
        reponse.textContent = tropCher
          ? tropCher.nom
          : "Aucun produit ne dépasse 5000 DH.";
        break;

      default:
        reponse.textContent = "Question Uknown.";
    }
  });
});
