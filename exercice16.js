const produits = [
      { id: 1, nom: "headphones", prix: 25, stock: 10 },
      { id: 2, nom: "keyboard", prix: 40, stock: 3 },
      { id: 3, nom: "mouse", prix: 15, stock: 0 }
    ];

    const cartes = document.querySelector("#cartes");
    const detail = document.querySelector("#detail");
    function afficher() {
      cartes.innerHTML = "";
      produits.forEach(p => {
        const div = document.createElement("div");
        div.className = "border rounded p-4";
        div.dataset.id = p.id;
        div.innerHTML = `
          <h3 class="font-bold">${p.nom}</h3>
          <button class="detail border rounded px-2"><span>🔍</span> detail</button>
          <button class="supprimer border rounded px-2">Supprimer</button>`;
        cartes.appendChild(div);
      });
    }

    cartes.addEventListener("click", (e) => {
      const bouton = e.target.closest("button");
      if (!bouton) return; 
      const produit = produits.find(p => p.id === Number(bouton.parentElement.dataset.id));
      if (bouton.classList.contains("detail")) {
        detail.textContent = `${produit.nom} - ${produit.prix} € - stock : ${produit.stock}`;
      } else {
        produits = produits.filter(p => p.id !== produit.id);
        detail.textContent = "";
        afficher();
      }
    });
