const fs = require('fs');
const { setUpGame } = require('./gameEvents');


const getUserInput = () => {
  const fileContent = fs.readFileSync('./inputs', 'utf-8');
  const lines = fileContent.trim().split('\n');
  return lines.slice(-1)[0];
};

const main = () => {
  const { gameNotifier, game, player } = setUpGame();

  console.log(game.currentObstacle().obstacle);

  fs.watchFile('./inputs', (type, file) => {
    const input = getUserInput();
    gameNotifier.emit(input, input, player);
    if (game.gameOver) {
      console.log('Game Over');
      process.exit(0);
    }
    console.log(game.currentObstacle().obstacle);
  })
};

main();
