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

// Event listeners for the buttons
button1El.onclick = goStore;
button2El.onclick = goCave;
button3El.onclick = fightDragon;

// Functions for visting stores, cave and fight the dragon
function goStore() {

}

function goCave() {

}

function fightDragon() {

}

