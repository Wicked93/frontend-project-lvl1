import readlineSync from 'readline-sync';
import {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
} from '../index.js';

export default function evenGame() {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum = getRnd(100);
    console.log(`Question: ${rndNum}`);
    const answ = readlineSync.question('Your answer: ');
    if (rndNum % 2 === 0) {
      if (answ === 'yes') {
        rightAnsw += 1;
        console.log('Correct');
      // eslint-disable-next-line no-else-return
      } else {
        console.log("'no' is wrong answer ;(. Correct answer was 'no'.");
        loseEnd();
        break;
      }
    }
    if (rndNum % 2 !== 0) {
      if (answ === 'no') {
        rightAnsw += 1;
        console.log('Correct');
      } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        loseEnd();
        break;
      }
    }
  }
  if (rightAnsw === 3) {
    return luckyEnd();
  }
}
