const EventEmitter = require('events');
const { Game } = require('./game');
const { Player } = require('./player');

const setUpGame = () => {
  const gameNotifier = new EventEmitter();
  const game = new Game();
  const player = new Player('guy');

  gameNotifier.on('jump', () => player.jump());
  gameNotifier.on('jump', (currentEvent, player) => game.updateGame(currentEvent, player));

  gameNotifier.on('run-fast', () => player.runFaster());
  gameNotifier.on('run-fast', (currentEvent, player) => game.updateGame(currentEvent, player));

  gameNotifier.on('turn-right', () => player.turnRight());
  gameNotifier.on('turn-right', (currentEvent, player) => game.updateGame(currentEvent, player));

  gameNotifier.on('turn-left', () => player.turnLeft());
  gameNotifier.on('turn-left', (currentEvent, player) => game.updateGame(currentEvent, player));

  return { gameNotifier, game, player };
};

exports.setUpGame = setUpGame;