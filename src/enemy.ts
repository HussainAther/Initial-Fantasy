import { Character } from './character';

// Enemy class
export class Enemy extends Character {
  constructor(name: string, health: number, level: number) {
    super(name, health, level);
  }

  // Implement the attack method for enemies
  attack(target: Character) {
    console.log(`${this.name} attacks ${target.name}.`);
    // Implement attack logic
  }

  // Implement the defend method for enemies
  defend(attacker: Character) {
    console.log(`${this.name} defends against ${attacker.name}.`);
    // Implement defend logic
  }
}

export { Enemy };

