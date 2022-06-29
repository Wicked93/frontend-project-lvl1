import {
  welcome,
  luckyEnd,
  loseEnd,
  questionCalc,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
} from '../index.js';
import getRnd from '../helpers.js';

export default function calcGame() {
  welcome();
  questionCalc();
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum1 = getRnd(10);
    const rndNum2 = getRnd(10);
    const collOperator = ['+', '-', '*'];
    const rndOperator = collOperator[getRnd(2)];
    const expression = `${rndNum1} ${rndOperator} ${rndNum2}`;
    commomQuestion(expression);
    const result = (num1, num2) => {
      if (rndOperator === '+') {
        return num1 + num2;
      }
      if (rndOperator === '-') {
        return num1 - num2;
      }
      return num1 * num2;
    };
    const rightAnswer = result(rndNum1, rndNum2);
    const num1 = Number(answer());
    if (compareAnswers(num1, rightAnswer)) {
      rightAnsw += 1;
      rightMessage();
    } else {
      wrongMessage(num1, rightAnswer);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    luckyEnd();
  }
}
