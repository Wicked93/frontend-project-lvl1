import {
  welcome,
  luckyEnd,
  loseEnd,
  questionPrime,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
} from '../index.js';
import getRnd from '../helpers.js';

export default function prime() {
  welcome();
  questionPrime();
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    let currentRightAnsw = 'yes';
    const number = getRnd(50) + 2;
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        currentRightAnsw = 'no';
      }
    }
    commomQuestion(number);
    const playersAnswer = answer();
    if (compareAnswers(playersAnswer, currentRightAnsw)) {
      rightAnsw += 1;
      rightMessage();
    } else {
      wrongMessage(playersAnswer, currentRightAnsw);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    luckyEnd();
  }
}
