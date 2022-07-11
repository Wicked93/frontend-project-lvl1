import gameRound from '../index.js';
import getRnd from '../helpers.js';

const description = 'What number is missing in the progression?';

export const progression = () => {
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
  return [collProgression.join(' '), hideNumber.toString()];
};

export default () => {
  gameRound(description, progression);
};
