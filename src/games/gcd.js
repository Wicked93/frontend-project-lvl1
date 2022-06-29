import {
  welcome,
  luckyEnd,
  loseEnd,
  questionGCD,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
} from '../index.js';
import getRnd from '../helpers.js';

export default function gcdGame() {
  welcome();
  questionGCD();
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum1 = getRnd(100);
    const rndNum2 = getRnd(100);
    commomQuestion(`${rndNum1} ${rndNum2}`);
    const playersAnswer = Number(answer());
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
    if (compareAnswers(playersAnswer, getGCD(rndNum1, rndNum2))) {
      rightAnsw += 1;
      rightMessage();
    } else {
      wrongMessage(playersAnswer, getGCD(rndNum1, rndNum2));
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    luckyEnd();
  }
}
