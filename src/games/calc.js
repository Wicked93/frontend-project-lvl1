import gameRound from '../index.js';
import getRandom from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

export const calcGame = () => {
  const rndNum1 = getRandom(10);
  const rndNum2 = getRandom(10);
  const collOperator = ['+', '-', '*'];
  const rndOperator = collOperator[getRandom(2)];
  const expression = `${rndNum1} ${rndOperator} ${rndNum2}`;
  const rightAnswer = calculate(rndNum1, rndNum2, rndOperator).toString();
  return [expression, rightAnswer];
};

export default () => {
  gameRound(description, calcGame);
};
