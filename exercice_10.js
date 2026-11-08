const message = '<strong>Promo</strong> : -20 % sur les claviers';
const go = document.getElementById("go");
const zoneTexte = document.querySelector("#zoneTexte");
const zoneHtml = document.querySelector("#zoneHtml");
go.addEventListener("click", () => {
  zoneTexte.textContent = message;
  zoneHtml.innerHTML = message;
  //   for innterHTML those <strong> makes the text bold unlike textdocumnt it only shows up with the text
});
// after replacing the message with  '<img src=x onerror="alert(1)">' textContent shows the text without excuting it while innerHTML shows an alert that excutes on the page
zoneHtml.innerHTML += ' Fin';
console.log(zoneHtml.innerHTML);
// it adds fin in the end of the message '<strong>Promo</strong> : -20 % sur les claviers fin'

// textContent: use it for text coming from the user or from data it is displayed as it is.
// innerHTML: use it only for HTML you control yourself.