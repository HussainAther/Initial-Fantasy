import { Ogre } from './ogre';
import { Peon } from './peon';
import { Knight } from './knight';
import { Archer } from './archer';
import { Mage } from './mage';

import { Character } from './character';
import { Enemy } from './enemy';
import { Map } from './map';
import { battle } from './battle';

const character = new Character();
const enemy = new Enemy();
const map = new Map();

// Function to simulate a game loop
function gameLoop() {
  // Create instances of characters
  const ogre = new Ogre("Ogre", 100, 5);
  const peon = new Peon("Peon", 80, 3);
  const knight = new Knight("Knight", 120, 7);
  const archer = new Archer("Archer", 90, 4);
  const mage = new Mage("Mage", 70, 2);

  // Perform actions with the characters
  ogre.attack(peon);
  peon.defend(ogre);
  knight.attack(ogre);
  archer.defend(knight);
  mage.attack(archer);
  archer.attack(mage);
}

// Start the game loop
gameLoop();

battle(character, enemy);

