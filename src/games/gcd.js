import gameRound from '../index.js';
import getRnd from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

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

export const gcdGame = () => {
  const rndNum1 = getRnd(100);
  const rndNum2 = getRnd(100);
  const expression = (`${rndNum1} ${rndNum2}`);
  return [expression, getGCD(rndNum1, rndNum2).toString()];
};

export default () => {
  gameRound(description, gcdGame);
};
