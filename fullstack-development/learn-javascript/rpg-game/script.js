// Variables
const XP = 0;
const HEALTH = 100;
const GOLD = 50;

let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1El = document.getElementById("button1");
const button2El = document.getElementById("button2");
const button3El = document.getElementById("button3");
const textEl = document.getElementById("text");
const xpTextEl = document.getElementById("xpText");
const healthTextEl = document.getElementById("healthText");
const goldTextEl = document.getElementById("goldText");
const monsterStatsEl = document.getElementById("monsterStats");
const monsterNameEl = document.getElementById("monsterName");
const monsterHealthEl = document.getElementById("monsterHealth");
// Empty array to store the locations
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"]
    }
];

// Event listeners for the buttons
button1El.onclick = goStore;
button2El.onclick = goCave;
button3El.onclick = fightDragon;

// Functions for visting stores, cave and fight the dragon
function goStore() {
    button1El.innerText = "Buy 10 health (10 gold)";
    button2El.innerText = "Buy weapon (30 gold)";
    button3El.innerText = "Go to town square";
    button1El.onclick = buyHealth;
    button2El.onclick = buyWeapon;
    button3El.onclick = goTown;
}

function goCave() {

}

function fightDragon() {

}

function buyHealth() {
    
}

function buyWeapon() {
    
}

function goTown() {
    button1El.innerText = "Go to store";
    button2El.innerText = "go to cave";
    button3El.innerText = "Fight dragon";
    button1El.onclick = buyHealth;
    button2El.onclick = buyWeapon;
    button3El.onclick = goTown;
    text.innerText = "You are in the town square. Do you see the sign \"Store\"?";
}