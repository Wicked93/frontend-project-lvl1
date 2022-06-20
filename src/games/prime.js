import readlineSync from 'readline-sync';
import {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
} from '../index.js';

export default function prime() {
  welcome();
  console.log('What number is missing in the progression?');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    let currentRightAnsw = 'yes';
    const number = getRnd(50) + 1;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        currentRightAnsw = 'no';
      }
    }
    console.log(`Question: ${number}`);
    const answ = readlineSync.question('Your answer: ');
    if (answ === currentRightAnsw) {
      rightAnsw += 1;
      console.log('Correct');
    // eslint-disable-next-line no-else-return
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${currentRightAnsw}'.`);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    return luckyEnd();
  }
}
