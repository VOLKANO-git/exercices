let compteurNotes = 0;
document.querySelector("#ajouter").addEventListener("click", function () {
  compteurNotes = compteurNotes + 1;
  const li = document.createElement("li");
li.textContent = "Note n°" + compteurNotes;
li.classList.add("p-2", "bg-yellow-100", "rounded");
console.log("after createElement :", li.parentElement); //after createElement li is there but not inside the <ul></ul>
document.querySelector("#notes").appendChild(li);
console.log("after appendChild :", li.parentElement); // and after appendChild li is in the index page inside of the <ul>li</ul>
});
