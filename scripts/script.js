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

const winkelwagenButton = document.querySelector("nav ul:nth-of-type(2) button:nth-of-type(1)");


const winkelwagenDialog = document.querySelector("nav ul:nth-of-type(2) dialog");


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

const scrollDiv = document.querySelector("main>div:nth-of-type(1)");

const scrollenTijdlijn = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

scrollDiv.animate(
  
  {
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    timeline: scrollenTijdlijn
  }
);

