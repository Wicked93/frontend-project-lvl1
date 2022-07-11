import gameRound from '../index.js';
import getRnd from '../helpers.js';

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
  const rndNum1 = getRnd(10);
  const rndNum2 = getRnd(10);
  const collOperator = ['+', '-', '*'];
  const rndOperator = collOperator[getRnd(2)];
  const expression = `${rndNum1} ${rndOperator} ${rndNum2}`;
  const rightAnswer = calculate(rndNum1, rndNum2, rndOperator).toString();
  return [expression, rightAnswer];
};

export default () => {
  gameRound(description, calcGame);
};
