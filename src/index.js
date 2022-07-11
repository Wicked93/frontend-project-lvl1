import readlineSync from 'readline-sync';

const gameRound = (description, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const countRound = 3;
  for (let i = 0; i < countRound; i += 1) {
    const [hiddenNumber, rightAnswer] = dataGame();
    console.log(`Question: ${hiddenNumber}`);
    const playersAnswer = readlineSync.question('Your answer: ');
    if (playersAnswer !== rightAnswer) {
      console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameRound;
