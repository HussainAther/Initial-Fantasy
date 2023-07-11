// Define an interface for characters that can attack
interface Attackable {
  attack(target: Character): void;
}

// Define an interface for characters that can defend
interface Defendable {
  defend(attacker: Character): void;
}

// Define a base abstract class for characters
export abstract class Character implements Attackable, Defendable {
  protected name: string;
  protected health: number;
  protected level: number;
  protected gold: number;

  constructor(name: string, health: number, level: number) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.gold = 0;
  }

  // Method for collecting gold
  collectGold(amount: number) {
    this.gold += amount;
    console.log(`${this.name} collected ${amount} gold.`);
  }

  // Abstract method for attacking
  abstract attack(target: Character): void;

  // Abstract method for defending
  abstract defend(attacker: Character): void;

  // Method to check if the character is alive
  isAlive(): boolean {
    return this.health > 0;
  }

  // Method to display character's information
  getInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Level: ${this.level}`);
    console.log(`Gold: ${this.gold}`);
  }
}

// Ogre class
class Ogre extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Ogres
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name} with a club.`);
    // Implement attack logic
  }

  // Implement the defend method for Ogres
  defend(attacker: Character) {
    console.log(`${this.name} defends against ${attacker.name} with a shield.`);
    // Implement defend logic
  }
}

// Peon class
class Peon extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Peons
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name} with a club.`);
    // Implement attack logic
  }

  // Implement the defend method for Peons
  defend(attacker: Character) {
    console.log(`${this.name} defends against ${attacker.name} with a shield.`);
    // Implement defend logic
  }
}

// Knight class
class Knight extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Knights
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name} with a sword.`);
    // Implement attack logic
  }

  // Implement the defend method for Knights
  defend(attacker: Character) {
    console.log(`${this.name} defends against ${attacker.name} with armor.`);
    // Implement defend logic
  }
}

// Archer class
class Archer extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Archers
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name} with a bow and arrow.`);
    // Implement attack logic
  }

  // Implement the defend method for Archers
  defend(attacker: Character) {
    console.log(`${this.name} defends against ${attacker.name} with a tunic.`);
    // Implement defend logic
  }
}

// Mage class
class Mage extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Mages
  attack(target: Character) {
    console.log(`${this.name} casts a powerful spell at ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Mages
  defend(attacker: Character) {
    console.log(`${this.name} creates a magical shield to defend against ${attacker.name}.`);
    // Implement defend logic
  }
}

// Ranger class
class Ranger extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Rangers
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name} with a bow and arrows.`);
    // Implement attack logic
  }

  // Implement the defend method for Rangers
  defend(attacker: Character) {
    console.log(`${this.name} takes cover and evades attacks from ${attacker.name}.`);
    // Implement defend logic
  }
}

// Druid class
class Druid extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Druids
  attack(target: Character) {
    console.log(`${this.name} summons the power of nature against ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Druids
  defend(attacker: Character) {
    console.log(`${this.name} transforms into a bear form to defend against ${attacker.name}.`);
    // Implement defend logic
  }
}

// Barbarian class
class Barbarian extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Barbarians
  attack(target: Character) {
    console.log(`${this.name} delivers a powerful axe swing at ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Barbarians
  defend(attacker: Character) {
    console.log(`${this.name} relies on sheer toughness and endurance to defend against ${attacker.name}.`);
    // Implement defend logic
  }
}

// Cleric class
class Cleric extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Clerics
  attack(target: Character) {
    console.log(`${this.name} channels divine energy to smite ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Clerics
  defend(attacker: Character) {
    console.log(`${this.name} invokes protective prayers to defend against ${attacker.name}.`);
    // Implement defend logic
  }
}

// Monk class
class Monk extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Monks
  attack(target: Character) {
    console.log(`${this.name} delivers precise strikes at ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Monks
  defend(attacker: Character) {
    console.log(`${this.name} relies on agility and evasion to defend against ${attacker.name}.`);
    // Implement defend logic
  }
}

// Bard class
class Bard extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for Bards
  attack(target: Character) {
    console.log(`${this.name} performs a mesmerizing musical attack on ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for Bards
  defend(attacker: Character) {
    console.log(`${this.name} uses bardic inspiration to bolster defenses against ${attacker.name}.`);
    // Implement defend logic
  }
}

export { Character, Ogre, Peon, Knight, Archer, Mage, Ranger, Druid, Barbarian, Cleric, Monk, Bard };

