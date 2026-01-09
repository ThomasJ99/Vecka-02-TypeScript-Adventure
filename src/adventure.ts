//*** --- Version 2 av Äventyr --- ***//

// -- Steg 1: Hjälten --

const heroName = "Link";
let hp = 3;
let isAlive = true;

const startingInventory: string[] = [];

console.log(`Välkommen hjälten ${heroName}! Du börjar med ${hp} HP.`);

// -- Steg 2: Inventory --
// Tomm array som är en string
const inventory: string[] = startingInventory;

console.log(
  `Du går ner i en grotta och stötter på en gammal man, 'Det är farligt att gå ensam, ta det här' `
);
inventory.push("Svärd");
console.log(`Du fick ett ${inventory}`);

// -- Steg 3: Äventyret --

const enemies: string[] = [
  "Octorok",
  "Lynel",
  "Tektite",
  "Peahat",
  "Dodongo",
  "Gohma",
  "Ganon",
];
const enemyDrops: string[] = ["Trä sköld", "Boomerang", "Pilbåge", "Bomber"];
// Enemy skada
const enemyDmgWeak = 1;
const enemyDmgStr = 2;
// Får troligen hårdkoda in värdena på dessa när det sker varje gång, om jag inte listar ut något bättre
const healingDrops: string[] = [
  "Hjärta",
  "Hälso dryck",
  "Hjärta",
  "Hälso dryck",
  "Hjärta",
  "Hälso dryck",
];
// Om jag var bättre skulle jag göra så att jag har en variabel som kan återställa hp till max och sen en annan som kan höja max hp
const hjärta = 1;
// Försök skriva om den här senare på viset Linus visade
for (const enemy of enemies) {
  if (isAlive) {
    // Hade velat lägga ta bort en: från loggen och typ lägga till det med .map för specifika enemies
    console.log(`Du möter en: ${enemy}`);

    if (enemy === "Octorok") {
      console.log("Du besegrade en Octorok utan problem!");
      inventory.push(`${enemyDrops[2]}`);
      inventory.push(`${healingDrops[0]}`);
      hp += hjärta;
      console.log(
        `Du fick en ${enemyDrops[2]} och ett ${healingDrops[0]} som ger dig mer hp. Din hp är nu ${hp}`
      );
      inventory.splice(2); // Tar bort hjärtat men är en ganska hårdkodad lösning
    }

    if (enemy === "Lynel") {
      hp -= enemyDmgWeak;
      console.log(`Lynel skadade dig! Du har ${hp} HP kvar.`);
    }

    if (enemy === "Gohma") {
      console.log(`Gohma stod inte en chans mot dig`);
    }

    if (enemy === "Tektite") {
      console.log(
        `Tektite önskar att den hade stött på vad som helst förutom dig.`
      );
      inventory.push("Hälso dryck");
    }

    if (enemy === "Peahat") {
      if (inventory.includes("Pilbåge")) {
        console.log(`Du skjöt ner fienden utan problem!`);
        inventory.push("Bomber");
      } else {
        hp -= enemyDmgStr;
        console.log(
          `Du kunde inte skjuta ner den flygande fienden och behövde springa därifrån efter du tagit ${enemyDmgStr} skada, din hp är nu: ${hp}`
        );
      }
    }

    if (enemy === "Dodongo") {
      if (inventory.includes("Bomber")) {
        console.log(
          `Tur nog hittade du bomber tidigare, du eliminerade Dodongo utan problem med dem`
        );
        inventory.splice(3); // Tar bort bomberna
      } else {
        hp = 0;
        isAlive = false;
        console.log(
          `Du hade ingen metod för att döda bossen, din hp är ${hp}. Game Over`
        );
      }
    }

    if (enemy === "Ganon") {
      if (
        hp >= 4 ||
        (inventory.includes("Hälso dryck") && inventory.includes("Svärd"))
      ) {
        console.log("Du besegrade demonen Ganon! och vann spelet!");
      } else {
        isAlive = false;
        console.log("Du kunde inte ta ner Ganon. Game Over.");
      }
    }
  }
}

// -- Steg 5: Resultat --
// Om du överlevt ditt äventyr eller inte
if (isAlive === true) {
  console.log(`Grattis ${heroName}, du överlevde äventyret!`);
} else {
  console.log(`Tyvärr ${heroName}, du dog...`);
}
// Ryggsäckens innehåll i slutet
console.log(inventory);