/* REQUIRING NODE.JS READLINE MODULE */

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
                console.log("\nFantastic! Let's begin!\n");
            } else if (lcResponse === "no") {
                console.log("\nWell that's a shame; you don't really have a choice. Time for some jokes!\n")
            } else {
                console.log("\nI didn't understand that, but no matter ... let's get to these jokes!\n")
            }
        }

        setTimeout(scriptCont, 500);
        setTimeout(jokeGen, 2000);
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
        {
            question: "What did the coffee report to the police?",
            answers: ["mugging", "the mugging", "a mugging"],
            response: "A MUGGING!",
        },
        {
            question: "What's orange and sounds like a parrot?",
            answers: ["carrot", "a carrot"],
            response: "A CARROT!",
        },
        {
            question: "Did you know the first French fries weren't actually cooked in France? (They were cooked in...)",
            answers: ["greece"],
            response: "...GREECE!",
        },
        {
            question: "When does a dad joke become a dad joke? (When it becomes...)",
            answers: ["apparent", "a parent"],
            response: "...APPARENT!",
        },
        {
            question: "What do you call someone with no body and no nose?",
            answers: ["nobody knows", "no body knows"],
            response: "NOBODY KNOWS!",
        },
        {
            question: "What is the least spoken language in the world?",
            answers: ["sign language", "sign-language", "signlanguage", "sign"],
            response: "SIGN LANGUAGE!",
        }
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

            setTimeout(goAgain, 1000);
        }

        setTimeout(responseGen, 500);
    });
}

/* REPEAT SEQUENCE */

const goAgain = () => {
    const questions = ["Ready for another one?", "Wanna go again?", "Keep it going? I've got plenty more!", "Wanna laugh some more?", "Would you like another joke?"];
    const randQuestion = Math.floor(Math.random() * questions.length);

    const yesArray = ["Yes!", "Sweet!", "Great!", "Fantastic!", "Fabulous!", "Yay!"];
    const randYes = Math.floor(Math.random() * yesArray.length);

    readline.question(`\n${questions[randQuestion]} (Yes/No)\n>> `, response => {
        const lcResponse = response.toLowerCase();
        if (lcResponse === "yes") {
            setTimeout(() => {
                console.log(`\n${yesArray[randYes]}\n`);
            }, 500);
            setTimeout(jokeGen, 1500);
        } else if (lcResponse === "no") {
            setTimeout(() => {
                console.log("\nBummer. Until next time, then!");
                readline.close();
                process.exit(0);
            }, 500);
        } else {
            setTimeout(() => {
                console.log("\nI didn't catch that, but I'm guessing you wanna go again. Sweet!\n")
            }, 500);
            setTimeout(jokeGen, 1500);
        }
    });
}

/* CALLING FUNCTIONS */

scriptInit();