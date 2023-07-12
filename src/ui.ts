// Menu class
class Menu {
  private items: string[];

  constructor(public title: string, items: string[]) {
    this.items = items;
  }

  // Display the menu and get user input
  display(): number {
    console.log(`--- ${this.title} ---`);
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${i + 1}. ${this.items[i]}`);
    }
    const choice = getUserChoice(1, this.items.length);
    return choice;
  }
}

// Button class
class Button {
  constructor(public label: string, public onClick: () => void) {}

  // Trigger the button click event
  click(): void {
    this.onClick();
  }
}

// Dialog class
class Dialog {
  constructor(public title: string, public message: string) {}

  // Display the dialog
  display(): void {
    console.log(`--- ${this.title} ---`);
    console.log(this.message);
  }
}

// Function to get user input for choice
function getUserChoice(min: number, max: number): number {
  const prompt = `Choose an option (${min}-${max}): `;
  let choice = Number(promptSync(prompt)());
  while (isNaN(choice) || choice < min || choice > max) {
    console.log("Invalid input. Please try again.");
    choice = Number(promptSync(prompt)());
  }
  return choice;
}

// Create a simple UI interface for testing
const mainMenu = new Menu("Main Menu", ["New Game", "Load Game", "Options", "Quit"]);
const startButton = new Button("Start", () => console.log("Start button clicked!"));
const exitDialog = new Dialog("Exit Game", "Are you sure you want to exit?");

// Display the main menu and handle user input
const choice = mainMenu.display();
console.log(`Selected option: ${choice}`);

// Trigger the button click event
startButton.click();

// Display the exit dialog
exitDialog.display();

