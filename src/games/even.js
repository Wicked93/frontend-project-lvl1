import {
  welcome,
  luckyEnd,
  loseEnd,
  questionEven,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
} from '../index.js';
import getRnd from '../helpers.js';

export default function evenGame() {
  welcome();
  questionEven();
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum = getRnd(100);
    commomQuestion(rndNum);
    const playersAnswer = answer();
    if (rndNum % 2 === 0) {
      if (compareAnswers(playersAnswer, 'yes')) {
        rightAnsw += 1;
        rightMessage();
      } else {
        wrongMessage(playersAnswer, 'yes');
        loseEnd();
        break;
      }
    }
    if (rndNum % 2 !== 0) {
      if (compareAnswers(playersAnswer, 'no')) {
        rightAnsw += 1;
        console.log('Correct');
      } else {
        wrongMessage(playersAnswer, 'no');
        loseEnd();
        break;
      }
    }
  }
  if (rightAnsw === 3) {
    luckyEnd();
  }
}
