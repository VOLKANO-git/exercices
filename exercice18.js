const produits = [];
const form = document.querySelector('#formulaire');
const erreur = document.querySelector('#erreur');
const liste = document.querySelector('#liste');

function afficherListe() {
      liste.innerHTML = produits
        .map(p => `<li>${p.nom} — ${p.prix} DH — ${p.categorie}</li>`)
        .join('');
    }

form.addEventListener('submit', e => {
      e.preventDefault(); 

const { nom, prix, categorie } = form.elements;
const nomValue = nom.value.trim();
const prixValue = Number(prix.value); 
const categorieValue = categorie.value;

if (!nomValue || !prix.value || !categorieValue) {
        erreur.textContent = 'Tous les champs sont obligatoires.';
        return;
      }

if (!(prixValue > 0)) {
        erreur.textContent = 'Le prix doit être un nombre positif.';
        return;
      }

const existe = produits.some(p => p.nom.toLowerCase() === nomValue.toLowerCase());
      if (existe) {
        erreur.textContent = 'Ce produit existe déjà.';
        return;
      }

const nouveau = { nom: nomValue, prix: prixValue, categorie: categorieValue };
      produits = [...produits, nouveau];

      afficherListe();
      erreur.textContent = '';
      form.reset();
      nom.focus();
    });