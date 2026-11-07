let compteur = 0
function afficher(){
    document.querySelector('#valeur').textContent = compteur;
}
document.querySelector('#plus').addEventListener('click',function(){
    compteur=compteur+1;
    afficher();
});
document.querySelector('moins').addEventListener('click',function(){
    if (compteur>0){
        compteur=compteur-1;
    }
    afficher();
});
document.querySelector('#reset').addEventListener('click',function(){
    compteur=0;
    afficher();
})