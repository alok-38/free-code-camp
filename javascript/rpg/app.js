let xp = 0;
let health = 100;
let gold = 50;
// track if the gamer is in store
let inStore = false;
// Track purcahses
let hasBoughtHealth = false;

const storeBtn = document.getElementById("btn-store");
const caveBtn = document.getElementById("btn-cave");
const fightBtn = document.getElementById("btn-fight");
const gameTextEl = document.getElementById("game-text");
const eventsTextEl = document.getElementById("game-events");

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
      gameTextEl.textContent = "Not enough gold!";
    }
  }
});

const displayStats = () => {
  XPEl.textContent = xp;
  healthEl.textContent = health;
  goldEl.textContent = gold;
};

displayStats();
