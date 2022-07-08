import gameRound from '../index.js';
import getRnd from '../helpers.js';

const task = 'Find the greatest common divisor of given numbers.';

export const gcdGame = () => {
  const rndNum1 = getRnd(100);
  const rndNum2 = getRnd(100);
  const expression = (`${rndNum1} ${rndNum2}`);
  const getGCD = (num1, num2) => {
    let a = num1;
    let b = num2;
    if (a < b) {
      getGCD(b, a);
    }
    let c;
    while (b !== 0) {
      c = a % b;
      a = b;
      b = c;
    }
    return a;
  };
  return [expression, getGCD(rndNum1, rndNum2).toString()];
};

const startGcdGame = () => {
  gameRound(task, gcdGame);
};

export default startGcdGame;
