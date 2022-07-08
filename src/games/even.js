import gameRound from '../index.js';
import getRnd from '../helpers.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const evenGame = () => {
  const number = getRnd(100);
  const rightAnswer = () => {
    if (evenNumber(number)) {
      return 'yes';
    }
    return 'no';
  };
  return [number, rightAnswer()];
};

const startEvenGame = () => {
  gameRound(task, evenGame);
};

export default startEvenGame;
