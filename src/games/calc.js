import gameRound from '../index.js';
import getRnd from '../helpers.js';

const task = 'What is the result of the expression?';

export const calcGame = () => {
  const rndNum1 = getRnd(10);
  const rndNum2 = getRnd(10);
  const collOperator = ['+', '-', '*'];
  const rndOperator = collOperator[getRnd(2)];
  const expression = `${rndNum1} ${rndOperator} ${rndNum2}`;
  const result = (num1, num2) => {
    if (rndOperator === '+') {
      return num1 + num2;
    }
    if (rndOperator === '-') {
      return num1 - num2;
    }
    return num1 * num2;
  };
  const rightAnswer = result(rndNum1, rndNum2).toString();
  return [expression, rightAnswer];
};

const startCalcGame = () => {
  gameRound(task, calcGame);
};

export default startCalcGame;
