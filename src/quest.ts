// Quest class
class Quest {
  private completed: boolean = false;
  private progress: number = 0;

  constructor(public name: string, public description: string, public objectives: Objective[], public reward: Reward) {}

  // Check if the quest is completed
  isCompleted(): boolean {
    return this.completed;
  }

  // Get the current progress of the quest
  getProgress(): number {
    return this.progress;
  }

  // Update the quest progress
  updateProgress(amount: number): void {
    this.progress += amount;

    // Check if all objectives are completed
    if (this.progress >= this.objectives.length) {
      this.completed = true;
    }
  }

  // Claim the quest reward
  claimReward(): Reward {
    if (this.completed) {
      return this.reward;
    } else {
      console.log("Quest is not completed yet. Cannot claim reward.");
      return null;
    }
  }
}

// Objective interface
interface Objective {
  name: string;
  description: string;
}

// Reward interface
interface Reward {
  experience: number;
  gold: number;
}

export { Quest, Objective, Reward };

