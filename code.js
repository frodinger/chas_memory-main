/*
1. En array med alla kort-objekt är importerade och ligger i cards. Med forEach Lägg till en property
showing: false till varje kort för att hålla reda på om kortet visas eller inte.
*/

/* 
2. Skapa en funktion createCard. Som tar ett card-objekt och ett index som input och skapar
ett img element och lägger till det på sidan i gameEl. Gör så här:
- skapa ett ett img-element med document.createElement("img")
- sätt attribut med setAttribute på img-elementet ange tex:
imgElement.setAttrubut("src", "images/backside.png") för baksidan på kortet.
om card.showing är true använd `images/${card.file}` annars använd "images/backside.png"
- lägg till width och height till imgElementet width ska vara 100 och height ska vara 145
- lägg till id = index på card elementet så att du kommer åt det senare
- använd appendChild för att lägga till kortet till gameEl
*/ 

/*
3. Använd for-loop eller forEach för att loopa igenom alla cards och anropa funktionen
createCard med varje kort och varje index (i). Nu ska alla kort synas på sidan.
Om du använder forEach måste du lägga till i som andra paremeter i arrow-function.
Då räknar i:et från 0 och uppåt
*/    

/*
4. Lägg till addEventListner på korten i funktionen createCard. När man klickar ska
kortet ändras från showing: false till showing:true
*/

/*
5 Använd en global variabel lastCard och lastCardEl för att hålla reda på vilket kort man klickade på senast.
kolla när man klickar på ett kort om det har samma värde som lastCard (card.num)
*/

// 6 (Ganska svårt) Få ihop hela spelet med det du skrivit ovan.

/*
Här kommer lite ideer om vad ni kan göra på del 6 i uppgiften:
Vända tillbaka korten som inte matchar.
Ha två spelare och räkna poäng och hålla reda på vems tur det är.
Fixa så att det blir två av varje kort (samma bild) i cards-arrayen så att man måste ha exakt match av kort stället för att matcha på värde
Start-knapp som slumpar om ordningen på korten
Obs! Denna del är överkurs. Men gör gärna ett försök och hjälp varandra
*/

import { cards } from "./cards.js";
const gameEl = document.getElementById("game");
let lastCard;
let lastCardEl;

cards.forEach((card) => {
    card["showing"] = false;
});

function createCard(card, index) {
    let imgEl = document.createElement("img");
    
    if (card.showing == false) {
        imgEl.setAttribute("src", "images/backside.png");
    } else if (card.showing == true) {
        imgEl.setAttribute(`src`, `images/${card.file}`);
    }
    
    imgEl.addEventListener("click", (e) => {
        const element = e.target;
        
        if (element.showing == true) {
            element.showing = false;
            imgEl.setAttribute("src", "images/backside.png");
        } else { 
            element.showing = true;
            imgEl.setAttribute(`src`, `images/${card.file}`);
        }
    });
    
    card["id"] = index;
    
    imgEl.setAttribute("height", "145");
    imgEl.setAttribute("width", "100");
    
    gameEl.appendChild(imgEl);
    
    //console.log(card);
    //console.log(imgEl);
}

for (let i = 0; i < cards.length; i++) {
    createCard(cards[i], i);
}