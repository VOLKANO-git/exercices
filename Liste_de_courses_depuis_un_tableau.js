const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];
console.log(courses[0]);                    
console.log(courses[courses.length - 1]);   
console.log(courses.length);  
courses.push('cafe')              
const total = document.getElementById('total');
const liste = document.getElementById('liste');
// for (let i = 0; i < courses.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = `${i + 1}. ${courses[i]}`;
//   liste.appendChild(li);
// }
courses.forEach((article, index) => {
  const li = document.createElement('li');
  li.textContent = `${index + 1}. ${article}`;
  liste.appendChild(li);
});