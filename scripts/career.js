/****************************************/
/* Scrollen Button Available roles      */
/****************************************/
// bron: Chat GPT, prompt: Hoe kan ik ervoor zorgen dat als je klikt op de button Available roles dat je naar de <h2>Featured Roles</h2> scrolt?

document.addEventListener('DOMContentLoaded', () => {
    const buttonRoles = document.querySelector('main section:nth-of-type(1) button:nth-of-type(1)');
    buttonRoles.addEventListener('click', () => {
        document.querySelector('main > section:nth-of-type(5)').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/****************************************/
/* Feedback themes & Light en dark      */
/****************************************/
// bron: Chat GPT, prompt: Wat kan ik gebruiken om variabelen of expressies in een string in te voegen? Antwoord: ${radio.value}

const feedback = document.querySelector("section:nth-of-type(8) p");

function showHint(bericht) {
    feedback.textContent = bericht;
    setTimeout(() => (feedback.textContent = ""), 10000);
}

document.querySelectorAll("input[name='theme']").forEach(radio =>
    radio.addEventListener("change", () =>
        showHint(`You have chosen "${radio.value}" as the theme.`)
    )
);


