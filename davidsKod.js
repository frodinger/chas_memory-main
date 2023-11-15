import { cards } from "./cards.js";
const gameEl = document.getElementById("game");
let lastCard;
let lastCardEl;


cards.forEach((card) => (card.showing = false));

function createCard(card, index) {
    const imgTag = document.createElement("img"); // <img src="file.png" />

    if (card.showing) {
        imgTag.src = `images/${card.file}`;
    } else {
        imgTag.src = "images/backside.png";
    }

    imgTag.id = index;
    imgTag.width = "100";
    imgTag.height = "145";


    imgTag.addEventListener("click", (e) => {
        const cardEl = e.currentTarget;
        const cardIndex = cardEl.id;
        const cardData = cards[cardIndex];

        cardEl.src = `images/${cardData.file}`;

        if (lastCard) { // om koret finns - jämför

            if(lastCard.num != cardData.num) {
                //om korten inte är lika så vänd tillbaka dem
                setTimeout(() => {
                    lastCardEl.src = "images/backside.png";
                    cardEl.src = "images/backside.png";
                }, 500);
                lastCard = null; //Starta om så att det tredje kortet kan jämföras med det fjärde
            }

        } else { // spara kortet i lastCard

            lastCard = cardData;
            lastCardEl = cardEl;
        }
    });


    gameEl.appendChild(imgTag);
    
}

cards.forEach((card, i) => createCard(card, i));