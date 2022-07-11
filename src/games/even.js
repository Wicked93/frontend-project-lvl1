import gameRound from '../index.js';
import getRnd from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const evenGame = () => {
  const number = getRnd(100);
  const getRightAnswer = getEvenNumber(number) ? 'yes' : 'no';
  return [number, getRightAnswer];
};

export default () => {
  gameRound(description, evenGame);
};
