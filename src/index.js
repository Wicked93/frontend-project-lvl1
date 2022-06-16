import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');

const welcome = () => console.log(`Hello, ${userName}!`);
const luckyEnd = () => console.log(`Congratulations, ${userName}!`);
const loseEnd = () => console.log(`Let's try again, ${userName}!`);

const getRnd = (num) => Math.round(Math.random() * num);

export {
  welcome,
  luckyEnd,
  loseEnd,
  getRnd,
};
