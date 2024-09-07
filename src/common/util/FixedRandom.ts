// Class for fixed Random Values
export class FixedRandom {
  seed: number;
  progress: number;
  currentValue: number;
  progressValue: number;
  bonus2: number;
  bonus3: number;

  constructor(seed = 0) {
    this.seed = seed;
    this.progress = seed;
    this.currentValue = 0;
    this.progressValue = 0;
    this.bonus2 = 0;
    this.bonus3 = 0;
  }

  next() {
    this.progressValue = this.progress * 743;
    this.bonus2 = this.progress % 2 == 0 ? 211 : 0;
    this.bonus3 = this.progress % 3 == 0 ? 863 : 0;
    this.currentValue = this.progressValue + this.bonus2 + this.bonus3;
    this.progress = (this.progress + 1) % 1000;
    return this.currentValue * 0.001;
  }
}
