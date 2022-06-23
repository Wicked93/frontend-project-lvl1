import readlineSync from 'readline-sync';
import {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
} from '../index.js';

export default function progression() {
  welcome();
  console.log('What number is missing in the progression?');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const collProgression = [];
    collProgression.push(getRnd(10));
    const stepProgression = getRnd(5) + 1;
    for (let i = 1; i < 5 + getRnd(6); i += 1) {
      collProgression.push(collProgression[i - 1] + stepProgression);
      collProgression.sort((a, b) => a - b);
    }
    const hideIndex = collProgression.length - getRnd(5);
    const hideNumber = collProgression[hideIndex];
    collProgression[hideIndex] = '..';
    console.log(`Question: ${collProgression}`);
    const answ = readlineSync.question('Your answer: ');
    if (Number(answ) === hideNumber) {
      rightAnsw += 1;
      console.log('Correct');
    // eslint-disable-next-line no-else-return
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${hideNumber}'.`);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    return luckyEnd();
  }
}
