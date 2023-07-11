import { Character } from './character';
import { Quest } from './quest';

// SaveData interface
interface SaveData {
  character: Character;
  quests: Quest[];
}

// Function to save game progress
function saveGame(character: Character, quests: Quest[]): void {
  const saveData: SaveData = {
    character,
    quests,
  };

  const saveJSON = JSON.stringify(saveData);
  localStorage.setItem('gameSave', saveJSON);

  console.log('Game progress saved successfully.');
}

// Function to load game progress
function loadGame(): SaveData | null {
  const saveJSON = localStorage.getItem('gameSave');
  if (saveJSON) {
    const saveData: SaveData = JSON.parse(saveJSON);
    console.log('Game progress loaded successfully.');
    return saveData;
  } else {
    console.log('No saved game found.');
    return null;
  }
}

export { saveGame, loadGame };

