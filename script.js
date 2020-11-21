/* REQUIRING NODE.JS READLINE MODULE */

const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/* PROGRAM START (GREETING) */

const scriptInit = () => {
    readline.question("Welcome, stranger! Are you ready to have a good laugh? (Yes/No)\n>> ", response => {
        const lcResponse = response.toLowerCase();
        const scriptCont = () => {
            if (lcResponse === "yes") {
                console.log("\nFantastic! Let's begin!");
            } else if (lcResponse === "no") {
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
    const disappointed = "\nArgh! You're no fun!";
    const jokes = [{
            question: "What do you call a government contract signed in a pub?",
            answers: ["bartender", "bar tender", "a bartender", "a bar tender"],
            response: "A BAR TENDER!",
        },
        {
            question: "What kind of shoes to artists wear?",
            answers: ["skechers", "sketchers"],
            response: "SKECHERS!",
        },
        {
            question: "What do you get from a pampered cow?",
            answers: ["spoiled milk", "spoilt milk"],
            response: "SPOILED MILK!",
        },
        {
            question: "What's an astronaut's favourite part of the computer?",
            answers: ["space bar", "spacebar", "the space bar", "the spacebar"],
            response: "The SPACE BAR!",
        },
    ];
    const randNum = Math.floor(Math.random() * jokes.length);

    readline.question(`${jokes[randNum]["question"]}\n>> `, response => {
        const lcResponse = response.toLowerCase();
        const answers = jokes[randNum]["answers"];
        const responseGen = () => {
            if (answers.includes(lcResponse)) {
                console.log(disappointed);
            } else {
                console.log(`\n${jokes[randNum]["response"]} Hahahahahaha xD`);
            }
        }

        setTimeout(responseGen, 500);
        readline.close();
    });
}

/* REPEAT SEQUENCE */

const goAgain = () => {
    const randomQuestion = () => {
        const questions = ["Ready for another one?", "Wanna go again?", "Keep it going? I've got plenty more!", "Wanna laugh some more?", "Would you like another joke?"];
        const randNum = Math.floor(Math.random() * questions.length);

        return questions[randNum] + " (Yes/No)\n>> ";
    }

    readline.question(randomQuestion(), response => {
        const lcResponse = response.toLowerCase();
        if (lcResponse === "yes") {
            console.log("\nSweet!\n");
            setTimeout(jokeGen, 1000);
        } else if (lcResponse === "no") {
            console.log("\nBummer. Until next time, then!");
        } else {
            console.log("\nI didn't catch that, but I'm guessing you wanna go again. Sweet!\n");
            setTimeout(jokeGen, 1000);
        }

        readline.close();
    });
}

/* CALLING FUNCTIONS */

jokeGen();