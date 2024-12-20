/****************************************/
/* Button Black Friday - Sign Up        */
/****************************************/
// bron: Chat GPT, prompt: Hoe zorg ik ervoor dat het formulier niet gelijk wordt ingediend?

document.querySelector("section:nth-of-type(4) button").addEventListener("click", function(event) {
    event.preventDefault();
    this.setAttribute("data-state", "signed-up");
    this.textContent = "Signed Up!";
});


/****************************************/
/* Feedback themes & Light en dark      */
/****************************************/
// bron: Chat GPT, prompt: Wat kan ik gebruiken om variabelen of expressies in een string in te voegen? Antwoord: ${radio.value}

const feedback = document.querySelector("section:nth-of-type(6) p");

function showHint(bericht) {
    feedback.textContent = bericht;
    setTimeout(() => (feedback.textContent = ""), 10000);
}

document.querySelectorAll("input[name='theme']").forEach(radio =>
    radio.addEventListener("change", () =>
        showHint(`You have chosen "${radio.value}" as the theme.`)
    )
);


