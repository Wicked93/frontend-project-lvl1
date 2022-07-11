import gameRound from '../index.js';
import getRandom from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const number = getRandom(50) + 2;
  const getRightAnswer = getPrimeNumber(number) ? 'yes' : 'no';
  return [number, getRightAnswer];
};

export default () => {
  gameRound(description, prime);
};
