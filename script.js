/* REQUIRING NODE.JS READLINE MODULE */

const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/* PROGRAM START (GREETING) */

const scriptInit = () => {
    readline.question("Welcome, stranger! Are you ready to have a good laugh? (Yes/No)\n>> ", response => {
        const trueResponse = response.toLowerCase();
        const scriptCont = () => {
            if (trueResponse === "yes") {
                console.log("\nFantastic! Let's begin!");
            } else if (trueResponse === "no") {
                console.log("\nWell that's a shame; you don't really have a choice. Time for some jokes!")
            } else {
                console.log("\nI didn't understand that, but no matter ... let's get to these jokes!")
            }
        }

        setTimeout(scriptCont, 500);
        setTimeout(jokeGen, 1000);
        readline.close();
    });
}

/* JOKE RANDOMISER */

const jokeGen = () => {
    const disappointed = "Way to go. You ruined my punchline.";
    readline.question("What do you call a government contract signed in a pub?\n>> ", response => {
        const lcResponse = response.toLowerCase();
        const answers = ["bartender", "bar tender"];
        const responseGen = () => {
            if (answers.includes(lcResponse)) {
                console.log(disappointed);
            } else {
                console.log("A BAR TENDER! Hahahahahaha xD");
            }
        }

        setTimeout(responseGen, 1000);
        readline.close();
    });
}