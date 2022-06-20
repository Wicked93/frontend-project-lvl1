import readlineSync from 'readline-sync';
import {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
} from '../index.js';

export default function gcdGame() {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum1 = getRnd(100);
    const rndNum2 = getRnd(100);
    console.log(`Question: ${rndNum1} ${rndNum2}`);
    const answ = readlineSync.question('Your answer: ');
    const getGCD = (a, b) => {
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
    if (Number(answ) === getGCD(rndNum1, rndNum2)) {
      rightAnsw += 1;
      console.log('Correct');
      // eslint-disable-next-line no-else-return
    } else {
      console.log(`'${answ}' is wrong answer ;(. Correct answer was '${getGCD(rndNum1, rndNum2)}'.`);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    return luckyEnd();
  }
}
