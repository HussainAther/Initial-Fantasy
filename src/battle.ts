// Function to handle the battle between a character and an enemy
function battle(character: Character, enemy: Enemy) {
  console.log(`A battle has started between ${character.name} and ${enemy.name}!`);

  // Game loop for the battle
  while (character.isAlive() && enemy.isAlive()) {
    // Display battle options
    console.log(`\n${character.name}'s Turn:`);
    console.log("1. Attack");
    console.log("2. Defend");
    console.log("3. Collect Gold");
    const choice = getUserChoice(1, 3); // Get user input for action choice

    // Perform the chosen action
    switch (choice) {
      case 1:
        character.attack(enemy);
        break;
      case 2:
        character.defend(enemy);
        break;
      case 3:
        character.collectGold();
        break;
    }

    // Enemy's turn
    if (enemy.isAlive()) {
      console.log(`\n${enemy.name}'s Turn:`);
      enemy.attack(character);
    }
  }

  // Display battle result
  if (character.isAlive()) {
    console.log(`\n${character.name} wins the battle!`);
  } else {
    console.log(`\n${enemy.name} defeats ${character.name}. Game over!`);
  }
}

// Function to get user input for action choice
function getUserChoice(min: number, max: number): number {
  const prompt = `Choose an action (${min}-${max}): `;
  let choice = Number(promptSync(prompt)());
  while (isNaN(choice) || choice < min || choice > max) {
    console.log("Invalid input. Please try again.");
    choice = Number(promptSync(prompt)());
  }
  return choice;
}

// Create instances of a character and an enemy for testing the battle system
const character = new Character("Player", 100, 5);
const enemy = new Enemy("Enemy", 80, 3);

// Start the battle
battle(character, enemy);

export { battle };

