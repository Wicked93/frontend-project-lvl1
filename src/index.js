import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');

const welcome = () => console.log(`Hello, ${userName}!`);
const luckyEnd = () => console.log(`Congratulations, ${userName}!`);
const loseEnd = () => console.log(`Let's try again, ${userName}!`);
const rightMessage = () => console.log('Correct');
const wrongMessage = (num1, num2) => console.log(`'${num1}' is wrong answer ;(. Correct answer was '${num2}'.`);

const questionCalc = () => console.log('What is the result of the expression?');
const questionEven = () => console.log('Answer "yes" if the number is even, otherwise answer "no". ');
const questionGCD = () => console.log('Find the greatest common divisor of given numbers.');
const questionPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');
const questionProgression = () => console.log('What number is missing in the progression?');
const commomQuestion = (expression) => console.log(`Question: ${expression}`);
const answer = () => readlineSync.question('Your answer: ');
const compareAnswers = (num1, num2) => num1 === num2;

export {
  welcome,
  luckyEnd,
  loseEnd,
  questionCalc,
  questionEven,
  questionGCD,
  questionPrime,
  questionProgression,
  commomQuestion,
  answer,
  compareAnswers,
  rightMessage,
  wrongMessage,
};
