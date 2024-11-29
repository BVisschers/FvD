// JavaScript Document
console.log("hi");

/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
const menuButton = document.querySelector("header > button"); 
const deNav = document.querySelector("header > nav"); 

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
menuButton.onclick = toggleMenu;


// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu (){
  deNav.classList.toggle("toonMenu");
  menuButton.classList.toggle("toonMenu");
}