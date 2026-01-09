"use strict";
// --- Version 1 av Äventyr ---
// -- Steg 1: Hjälten --
const heroName = "Potatis";
let hp = 100;
let isAlive = true;
const startingInventory = ["Svärd"];
console.log(`Välkommen ${heroName}! Du börjar med ${hp} HP och ett ${startingInventory}.`);
// -- Steg 2: Inventory --
// Tomm array som är en string
const inventory = startingInventory;
// Du dödade en fiende och hämtar ditt loot
inventory.push(" Sköld");
// Du föll för en fälla och tappar det sista i ditt inventory
// inventory.pop();
// Du kollar vad du har kvar
console.log(`Din ryggsäck innehåller: ${inventory}`);
// -- Steg 3: Äventyret --
const enemies = ["Slemmpropp", "Varg", "Drake"];
// Försök skriva om den här senare på viset Linus visade
for (const enemy of enemies) {
    console.log(`Du möter en: ${enemy}`);
    if (enemy === "Slemmpropp") {
        console.log("Du besegrade Slemproppen utan problem!");
        inventory.push("Guldmynt");
    }
    if (enemy === "Varg") {
        hp -= 20;
        console.log(`Varjen bet dig! Du har ${hp} HP kvar.`);
    }
    if (enemy === "Drake") {
        if (hp >= 50 && isAlive && inventory.includes("Svärd")) {
            console.log(`Du besegrade draken! och vann spelet! Du fick en hälsodryck som sätter ditt hp till ${(hp = 100)}`);
        }
        else {
            isAlive = false;
            console.log("Draken sprutade eld. Game Over.");
        }
    }
}
// -- Steg 5: Resultat --
// Om du överlevt ditt äventyr eller inte
if ((isAlive = true)) {
    console.log(`Grattis ${heroName}, du överlevde äventyret!`);
}
else {
    console.log(`Tyvärr ${heroName}, du dog i skogen...`);
}
// Ryggsäckens innehåll i slutet
console.log(inventory);
// --- Version 2 av Äventyr --- //
