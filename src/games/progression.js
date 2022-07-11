import gameRound from '../index.js';
import getRandom from '../helpers.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const collProgression = [];
  collProgression.push(getRandom(10));
  const stepProgression = getRandom(5) + 1;
  for (let i = 1; i < 5 + getRandom(6); i += 1) {
    collProgression.push(collProgression[i - 1] + stepProgression);
    collProgression.sort((a, b) => a - b);
  }
  return collProgression;
};

export const progression = () => {
  const currentProgression = getProgression();
  const hideIndex = currentProgression.length - getRandom(5) - 1;
  const hideNumber = currentProgression[hideIndex];
  currentProgression[hideIndex] = '..';
  return [currentProgression.join(' '), hideNumber.toString()];
};

export default () => {
  gameRound(description, progression);
};
