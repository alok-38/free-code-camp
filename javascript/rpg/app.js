let xp = 0;
let health = 100;
let gold = 50;
// track if the gamer is in store
let inStore = false;
// Track purcahses
let hasBoughtHealth = false;
// Track if the gamer is in the cave
let inCave = false;
// Weapons inventory
let weaponsInventory = [];
// Track weapons purchase
let hasBoughtSword = false;
// Fight state
let inFight = false;

const storeBtn = document.getElementById("btn-store");
const caveBtn = document.getElementById("btn-cave");
const fightBtn = document.getElementById("btn-fight");
const gameTextEl = document.getElementById("game-text");
const eventsTextEl = document.getElementById("game-events");

const originalBgColor = getComputedStyle(eventsTextEl).backgroundColor;

let XPEl = document.getElementById("xp-value");
let healthEl = document.getElementById("health-value");
let goldEl = document.getElementById("gold-value");

storeBtn.addEventListener("click", () => {
  if (!inStore) {
    inStore = true;
    gameTextEl.textContent = "You enter the store.";
    storeBtn.textContent = "Buy 10 health (10 gold)";
    caveBtn.textContent = `Buy weapon (${gold} gold)`;
    fightBtn.textContent = `Go to the town square`;
  } else {
    const healthCost = 10;
    const healthGain = 10;

    if (gold >= healthCost) {
      gold -= healthCost;
      health += healthGain;

      if (!hasBoughtHealth) {
        eventsTextEl.textContent = `Purchased ${healthGain} health for ${healthCost} gold`;
        hasBoughtHealth = true;
      } else {
        eventsTextEl.textContent = `Purchased ${healthGain} more health for ${healthCost} gold`;
      }

      displayStats();
    } else {
      eventsTextEl.textContent = "Not enough gold!";
    }
  }
});

caveBtn.addEventListener("click", () => {
  if (!inCave) {
    inCave = true;
    gameTextEl.textContent = "You enter the cave.";
    storeBtn.textContent = "Buy 10 health (10 gold)";
    caveBtn.textContent = `Buy sword (50 gold)`;
    fightBtn.textContent = `Go to the town square`;
  } else {
    const swordCost = 50;

    if (gold >= swordCost) {
      gold -= swordCost;

      if (!weaponsInventory.includes("sword")) {
        weaponsInventory.push("sword");
        eventsTextEl.textContent =
          "You bought a sword. You now have a sword in the inventory!";
      } else {
        eventsTextEl.textContent = "You already have a sword!";
      }

      displayStats();
    } else {
      eventsTextEl.textContent = "Not enough gold!";
    }
  }
});

fightBtn.addEventListener("click", () => {
  if (!inFight) {
    // Enter fight mode
    inFight = true;
    inStore = false;
    inCave = false;

    storeBtn.textContent = "Attack";
    caveBtn.textContent = "Dodge";
    fightBtn.textContent = "Run";

    gameTextEl.textContent = "A dragon appears! What will you do?";
    eventsTextEl.textContent = "The dragon looks dangerous!";

    // Turn red
    eventsTextEl.style.backgroundColor = "red";
  } else {
    // Exit fight mode
    inFight = false;

    storeBtn.textContent = "Go to store";
    caveBtn.textContent = "Go to cave";
    fightBtn.textContent = "Fight dragon";

    gameTextEl.textContent =
      'You ran back to the town square. You see a sign that says "Store".';
    eventsTextEl.textContent = "You escaped safely.";

    // Restore original color
    eventsTextEl.style.backgroundColor = originalBgColor;
  }
});

const displayStats = () => {
  XPEl.textContent = xp;
  healthEl.textContent = health;
  goldEl.textContent = gold;
};

displayStats();
