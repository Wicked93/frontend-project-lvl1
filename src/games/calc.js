import readlineSync from 'readline-sync';
import {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
} from '../index.js';

export default function calcGame() {
  welcome();
  console.log('What is the result of the expression?');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum1 = getRnd(10);
    const rndNum2 = getRnd(10);
    const collOperator = ['+', '-', '*'];
    const rndOperator = collOperator[getRnd(2)];
    const expression = `${rndNum1} ${rndOperator} ${rndNum2}`;
    console.log(`Question: ${expression}`);
    const answ = readlineSync.question('Your answer: ');
    const result = eval(expression);
    if (answ === result.toString()) {
      rightAnsw += 1;
      console.log('Correct');
      // eslint-disable-next-line no-else-return
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${result}'.`);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    return luckyEnd();
  }
}
