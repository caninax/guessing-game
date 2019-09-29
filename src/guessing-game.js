class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        return Math.ceil((this.max + this.min) / 2);
    }

    lower() {
        this.max = Math.ceil((this.max + this.min) / 2);
    }

    greater() {
        this.min = Math.ceil((this.max + this.min) / 2);
    }
}

module.exports = GuessingGame;