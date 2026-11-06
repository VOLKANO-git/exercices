function calculerTTC(prix){
     prix+0.2*prix
}
console.log(calculerTTC(100));
function afficherPrix(select,prix){
    const element = document.querySelector(select);
    element.textContent = `HT : ${prix} DH · TTC : ${calculerTTC(prix)} DH.`;
}
afficherPrix('#p1', 100);
afficherPrix('#p2', 45);
afficherPrix('#p3', 320);
// because the function doesnt bring any value without return