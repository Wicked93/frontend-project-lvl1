import readlineSync from 'readline-sync';

const gameRound = (task, dataGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const [hiddenNumber, rightAnswer] = dataGame();
    console.log(`Question: ${hiddenNumber}`);
    const playersAnswer = readlineSync.question('Your answer: ');
    if (playersAnswer === rightAnswer) {
      console.log('Correct');
      rightAnsw += 1;
    } else {
      console.log(`'${playersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  if (rightAnsw === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default gameRound;
