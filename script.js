/* REQUIRING NODE.JS READLINE MODULE */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/* GREETING */

const greeting = () => {
    readline.question("Welcome, stranger! Are you ready to have a good laugh? (Yes/No) \n>> ", response => {
        const trueResponse = response.toLowerCase();
        const responseGen = () => {
            if (trueResponse === "yes") {
                console.log("\nFantastic! Let's begin!");
            } else if (trueResponse === "no") {
                console.log("\nWell that's a shame; you don't really have a choice. Time for some jokes!")
            } else {
                console.log("\nI didn't understand that, but no matter ... let's get to these jokes!")
            }
        }

        setTimeout(responseGen, 500);
        readline.close();
    });
}

/* CALLING FUNCTIONS */

greeting();