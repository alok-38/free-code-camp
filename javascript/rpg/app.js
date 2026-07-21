let xp = 0;
let health = 100;
let gold = 50;

const storeBtn = document.getElementById('btn-store');
const caveBtn = document.getElementById('btn-cave');
const fightBtn = document.getElementById('btn-fight');

let XPEl = document.getElementById('xp-value');
let healthEl = document.getElementById('health-value');
let goldEl = document.getElementById('gold-value');

const displayStats = () => {
    XPEl.textContent = xp;
    healthEl.textContent = health;
    goldEl.textContent = gold;
}

displayStats();