const notes  = document.querySelectorAll('.note');         
const noteclass = document.getElementsByClassName('note');    
console.log(notes);  
console.log(noteclass);   

document.getElementById('surligner').addEventListener('click', () => {
  Array.from(notesGCN).forEach(note => note.classList.toggle('bg-yellow-200'));
});

document.getElementById('lire').addEventListener('click', () => {
  const radios = document.getElementsByName('theme');
  const coche = Array.from(radios).find(radio => radio.checked);
  console.log(coche.value);
});

const noteD = document.createElement('p');
noteD.className = 'note';
noteD.textContent = 'Note D';
document.body.appendChild(noteD);

console.log(notes.length);    
console.log(noteclass.length); 