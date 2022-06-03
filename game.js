class Game {
  constructor() {
    this.trackLength = 4;
    this.track = [
      {
        obstacle: 'stone in front',
        expectedEvent: 'jump'
      },
      {
        obstacle: 'wall in front and right',
        expectedEvent: 'turn-left'
      },
      {
        obstacle: 'wall in front and left',
        expectedEvent: 'turn-right'
      },
      {
        obstacle: 'Monster is catching up',
        expectedEvent: 'run-fast'
      }
    ]
    this.gameOver = false;
  }

  decreaseTrackLength() {
    this.trackLength--;
  }

  currentObstacle() {
    return this.track[this.trackLength - 1];
  }

  updateGame(currentEvent, player) {
    if (!this.isGameOver(currentEvent, player)) {
      this.decreaseTrackLength();
      return;
    }
    this.gameOver = true;
  }


  isMoveValid(currentEvent) {
    return this.currentObstacle().expectedEvent === currentEvent;
  }

  isGameOver(currentEvent, player) {
    return !this.isMoveValid(currentEvent) || this.trackLength === 1 || !player.isStaminaLeft();
  }
}

exports.Game = Game
