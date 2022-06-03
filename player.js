class Player {
  constructor(name) {
    this.name = name;
    this.stamina = 5;
  }

  decreaseStamina(points) {
    this.stamina -= points;
  }

  jump() {
    console.log('jumping');
    this.decreaseStamina(5);
  }

  runFaster() {
    console.log('running faster');
    this.decreaseStamina(2);
  }

  turnRight() {
    console.log('turning right');
  }

  turnLeft() {
    console.log('turning left');
  }

  isStaminaLeft() {
    return this.stamina > 0;
  }
}

exports.Player = Player;
