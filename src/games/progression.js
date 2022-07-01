import {
  welcome,
  luckyEnd,
  loseEnd,
  questionProgression,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
} from '../index.js';
import getRnd from '../helpers.js';

export default function progression() {
  welcome();
  questionProgression();
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const collProgression = [];
    collProgression.push(getRnd(10));
    const stepProgression = getRnd(5) + 1;
    for (let i = 1; i < 5 + getRnd(6); i += 1) {
      collProgression.push(collProgression[i - 1] + stepProgression);
      collProgression.sort((a, b) => a - b);
    }
    const hideIndex = collProgression.length - getRnd(5) - 1;
    const hideNumber = collProgression[hideIndex];
    collProgression[hideIndex] = '..';
    commomQuestion(collProgression.join(' '));
    const playersAnswer = answer();
    if (compareAnswers(Number(playersAnswer), hideNumber)) {
      rightAnsw += 1;
      rightMessage();
    } else {
      wrongMessage(playersAnswer, hideNumber);
      loseEnd();
      break;
    }
  }
  if (rightAnsw === 3) {
    luckyEnd();
  }
}
