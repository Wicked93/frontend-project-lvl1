import gameRound from '../index.js';
import getRnd from '../helpers.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const prime = () => {
  let currentRightAnsw = 'yes';
  const number = getRnd(50) + 2;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      currentRightAnsw = 'no';
    }
  }
  return [number, currentRightAnsw];
};

const startPrimeGame = () => {
  gameRound(task, prime);
};

export default startPrimeGame;
