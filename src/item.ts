// Item class
export class Item {
  constructor(public name: string, public type: string, public stats: Stats, public effects: Effect[]) {}
}

// Stats interface
interface Stats {
  attack: number;
  defense: number;
  health: number;
}

// Effect interface
interface Effect {
  name: string;
  description: string;
}

export { Item };

