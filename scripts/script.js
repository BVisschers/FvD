// JavaScript Document
console.log("hi");

/****************************************/
/* menu openen en sluiten met de button */
/****************************************/
// Bron: Sanne

const menuButton = document.querySelector("header > button");
const deNav = document.querySelector("header > nav");


menuButton.onclick = toggleMenu;

function toggleMenu() {
  deNav.classList.toggle("toonMenu");
  menuButton.classList.toggle("toonMenu");
}




/****************************************/
/* winkelmandje */
/****************************************/

const winkelwagenButton = document.querySelector("header > button:nth-of-type(2)");


const winkelwagenDialog = document.querySelector("header dialog");


winkelwagenButton.addEventListener("click", () => {
  winkelwagenDialog.show();
});




/****************************************/
/* Laad animatie                        */
/****************************************/

var laadicoon = document.querySelector("main > div:last-of-type");


function hideLoader() {
  laadicoon.style.display = "none";
}

setTimeout(hideLoader, 2000);



/***************************************************/
/* Inschrijven voor de emails - homepage           */
/***************************************************/

document.addEventListener("DOMContentLoaded", () => {
  const checkboxLabel = document.getElementById("news");
  const emailveld = document.getElementById("email");
  const numberveld = document.getElementById("number");

  checkboxLabel.addEventListener("click", () => {
    if (checkboxLabel.checked) {

      const email = emailveld.value.trim();
      const number = numberveld.value.trim();

      if (!email || !number) {
        alert("Please enter your email address and phone number before subscribing to the newsletters.");
        checkboxLabel.checked = false;
      }
    }
  });
});




/****************************************/
/* Audio video button - career pagina   */
/****************************************/

document.addEventListener("DOMContentLoaded", () => {
  const videoButton = document.querySelector("section button:nth-of-type(2)");
  const audioOpname = document.querySelector("section audio");


  videoButton.addEventListener("click", () => {

    if (audioOpname) {
      audioOpname.play();
    }
  });
});








