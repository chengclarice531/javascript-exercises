const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Please enter the number you would like to FizzBuzz up to: ", (input) => {
  const answer = parseInt(input);

for (let i=1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}
readline.close();
});
