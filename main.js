// Get references to the UI elements
const attackButton = document.getElementById("attack-button");
const inventoryButton = document.getElementById("inventory-button");
const questButton = document.getElementById("quest-button");
const settingsButton = document.getElementById("settings-button");
const dialogBox = document.getElementById("dialog-box");
const nextDialogButton = document.getElementById("next-dialog-button");
const introTextElement = document.getElementById("intro-text");
const playerNameInput = document.getElementById("player-name");
const characterClassSelect = document.getElementById("character-class");
const startGameButton = document.getElementById("start-game-button");
const inventoryTextElement = document.getElementById("inventory-text");

// Event listeners for UI interactions
attackButton.addEventListener("click", handleAttack);
inventoryButton.addEventListener("click", handleInventory);
questButton.addEventListener("click", handleQuests);
settingsButton.addEventListener("click", handleSettings);
nextDialogButton.addEventListener("click", handleNextDialog);

let currentDialogState = "intro";

// nextDialogButton.onclick = handleNextDialog;

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

// Function to display dialog text
function displayDialog(text) {
  dialogBox.textContent = text;
}

// Function to show village options
function showVillageOptions() {
  displayDialog("You have two options in the village of Froldyium: venture into the wild fields or meet the villagers. What would you like to do?");
  // Add your code to show the options for the village here
  // You can display buttons or use other UI elements to represent the options
  // Example:
  const option1Button = document.createElement("button");
  option1Button.textContent = "Venture into the wild fields";
  option1Button.addEventListener("click", handleOption1);
  dialogBox.appendChild(option1Button);

  const option2Button = document.createElement("button");
  option2Button.textContent = "Meet the villagers";
  option2Button.addEventListener("click", handleOption2);
  dialogBox.appendChild(option2Button);
}

// Event handler for option 1 (Venture into the wild fields)
function handleOption1() {
  displayDialog("You embark on a journey into the wild fields. The untamed wilderness awaits!");
  // Add your logic for what happens when the player chooses option 1
  // This can include initiating battles, exploring, or any other game mechanics
  // Example:
  setDialogState("wildFields");
}

// Event handler for option 2 (Meet the villagers)
function handleOption2() {
  displayDialog("You decide to meet the villagers. They welcome you with open arms and offer their assistance.");
  // Add your logic for what happens when the player chooses option 2
  // This can include interacting with NPCs, completing quests, or any other game mechanics
  // Example:
  setDialogState("meetVillagers");
}


function getDialogState() {
  // Retrieve the trimmed text content of the dialog box
  const currentDialog = dialogBox.textContent.trim();

  // Determine the dialog state based on the current dialog content
  if (currentDialog === "You have arrived at the entrance of Glagera. What would you like to do next?") {
    return "intro";
  } else if (currentDialog === "You arrive at the village of Froldyium. What would you like to do here?") {
    return "village";
  } else {
    return "unknown";
  }
}

function setDialogState(state) {
  currentDialogState = state;
}

function handleNextDialog() {
  switch (currentDialogState) {
    case "intro":
      displayDialog("You have arrived at the entrance of Glagera. Continue your journey to the village of Froldyium!");
      setDialogState("village");
      break;
    case "village":
      displayDialog("You arrive at the village of Froldyium. What would you like to do here?");
      showVillageOptions();
      break;
    default:
      displayDialog("The journey ends here. Thanks for playing!");
      nextDialogButton.style.display = "none";
      break;
  }
}

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

  // Generate introductory text based on player name and character class
  let introText = `Welcome, ${playerName}, the ${characterClass}! You find yourself standing at the entrance of the mystical land of Glagera. The air is filled with anticipation as you prepare to embark on a grand adventure. As ${characterClass === "Ogre" ? "an" : "a"} ${characterClass}, you possess unique skills and abilities that will be essential on your journey. Are you ready to step into this enchanting world and fulfill your destiny? Let the epic quest begin!`;

  // Display the introductory text to the player
  introTextElement.textContent = introText;

  // Hide the character selection UI and show the game UI
  // Add your game logic here

  // Hide the character selection UI
  const characterInfo = document.getElementById("character-info");
  characterInfo.style.display = "none";

  // Show the game UI
  const gameUI = document.getElementById("game-ui");
  gameUI.style.display = "block";

  // Show the "Next Dialog" button
  nextDialogButton.style.display = "inline";
}

// Function to show the player's inventory
function showInventory() {
  // Check if the inventory is empty
  const inventoryIsEmpty = true; // Replace with your inventory check logic

  // Display the inventory text accordingly
  if (inventoryIsEmpty) {
    inventoryTextElement.textContent = "Inventory is empty.";
  } else {
    // Code to display the actual inventory items
    inventoryTextElement.textContent = "Display inventory items here.";
  }
}

// Event listener for the "Inventory" button
inventoryButton.addEventListener("click", showInventory);

startGameButton.addEventListener("click", startGame);
