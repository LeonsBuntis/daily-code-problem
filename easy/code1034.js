// This problem was asked by Microsoft.

// You have n fair coins and you flip them all at the same time. 
// Any that come up tails you set aside. 
// The ones that come up heads you flip again. 
// How many rounds do you expect to play before only one coin remains?

// Write a function that, given n, returns the number of rounds you'd expect to play until one coin remains.

let init = 5;

let howManyRounds = (n, rounds) => {

    console.log(`Begin round ${rounds}, n ${n}`);

    if (n <= 1) {
        return rounds;
    }

    rounds = !rounds 
        ? 1
        : rounds+1;

    return howManyRounds(Math.ceil(n/2), rounds++);
};

console.log(howManyRounds(init));
