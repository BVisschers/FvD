// JavaScript Document
console.log("hi");

/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

const menuButton = document.querySelector("header > button"); 
const deNav = document.querySelector("header > nav"); 


menuButton.onclick = toggleMenu;

function toggleMenu (){
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

setTimeout(hideLoader, 2500);




/****************************************/
/* scroll animatie                      */
/****************************************/

// Bron: https://medium.com/pengenpaham/build-simple-scrolltimeline-using-html-css-and-js-2617f03b5063

// const scrollDiv = document.querySelector("main>div:nth-of-type(1)");

// const scrollenTijdlijn = new ScrollTimeline({
//   source: document.scrollingElement,
//   orientation: "block",
//   scrollOffsets: [CSS.percent(0), CSS.percent(100)],
// });

// scrollDiv.animate(
  
//   {
//     transform: ["scaleX(0)", "scaleX(1)"],
//   },
//   {
//     timeline: scrollenTijdlijn
//   }
// );


/****************************************/
/* Inschrijven voor de emails           */
/****************************************/

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
/* Audio video button career pagina     */
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











