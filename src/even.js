import readlineSync from 'readline-sync';

export default function evenGame() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnsw = 0;
  while (rightAnsw < 3) {
    const rndNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${rndNum}`);
    const answ = readlineSync.question('Your answer: ');
    if (rndNum % 2 === 0) {
      if (answ === 'yes') {
        rightAnsw += 1;
        console.log('Correct');
      // eslint-disable-next-line no-else-return
      } else {
        console.log(`'no' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
        break;
      }
    }
    if (rndNum % 2 !== 0) {
      if (answ === 'no') {
        rightAnsw += 1;
        console.log('Correct');
      } else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
        break;
      }
    }
  }
  if (rightAnsw === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
}
