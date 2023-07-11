// Get references to the UI elements
const attackButton = document.getElementById("attack-button");
const inventoryButton = document.getElementById("inventory-button");
const questButton = document.getElementById("quest-button");
const settingsButton = document.getElementById("settings-button");
const dialogBox = document.getElementById("dialog-box");
const nextDialogButton = document.getElementById("next-dialog-button");

// Event listeners for UI interactions
attackButton.addEventListener("click", handleAttack);
inventoryButton.addEventListener("click", handleInventory);
questButton.addEventListener("click", handleQuests);
settingsButton.addEventListener("click", handleSettings);
nextDialogButton.addEventListener("click", handleNextDialog);

// Function to handle attack button click
function handleAttack() {
  // Perform attack logic
  // Update game UI accordingly
  console.log("Attack button clicked!");
}

// Function to handle inventory button click
function handleInventory() {
  // Open inventory menu
  // Display inventory items and options
  console.log("Inventory button clicked!");
}

// Function to handle quests button click
function handleQuests() {
  // Open quests menu
  // Display active quests and progress
  console.log("Quests button clicked!");
}

// Function to handle settings button click
function handleSettings() {
  // Open settings menu
  // Allow the player to customize game settings
  console.log("Settings button clicked!");
}

// Function to handle next dialog button click
function handleNextDialog() {
  // Progress through the NPC dialog
  // Update the dialog box with the next text
  console.log("Next dialog button clicked!");
}

// Get references to the UI elements
const playerNameInput = document.getElementById("player-name");
const characterClassSelect = document.getElementById("character-class");
const startGameButton = document.getElementById("start-game-button");

// Function to start the game
function startGame() {
  // Get player name and character class selection
  const playerName = playerNameInput.value;
  const characterClass = characterClassSelect.value;

  // Validate player name and character class
  if (playerName === "") {
    alert("Please enter your name.");
    return;
  }

  if (characterClass === "") {
    alert("Please select a character class.");
    return;
  }

  // Start the game logic
  console.log(`Starting game as ${playerName} - ${characterClass} class`);

  // Opening Introduction
  const introMessage = `Welcome, ${playerName}, to the land of Glagera! As a brave ${characterClass}, your journey begins here. Your mission is to travel to the legendary 7-11 and uncover the secrets hidden within. The path ahead will be filled with challenges and adventures. Are you ready to embark on this epic quest?`;
  
  // Display the introduction message to the player
  showDialog(introMessage);

  // Add your game logic here
}

// Automatically start the game when the page loads
window.addEventListener("DOMContentLoaded", startGame);


