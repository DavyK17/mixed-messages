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
                console.log("\nFantastic! Let's begin!");
            } else if (lcResponse === "no") {
                console.log("\nWell that's a shame; you don't really have a choice. Time for some jokes!")
            } else {
                console.log("\nI didn't understand that, but no matter ... let's get to these jokes!")
            }
        }

        setTimeout(scriptCont, 500);

        setTimeout(() => {
            console.log("\nI'll ask you a question (the set-up) for which you have to guess an answer (the punchline). Be sure not to include any punctuation marks.\n");
        }, 2000);

        setTimeout(jokeGen, 5000);
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
        },
        {
            question: "What does a baby computer call his father?",
            answers: ["data"],
            response: "DATA!",
        },
        {
            question: "What do you call an illegally parked frog?",
            answers: ["toad", "a toad"],
            response: "A TOAD!",
        },
        {
            question: "How does a leopard change its spots?",
            answers: ["moving", "by moving"],
            response: "By MOVING!",
        },
        {
            question: "Why can't you trust atoms?",
            answers: ["they make up everything"],
            response: "They MAKE UP EVERYTHING!",
        },
        {
            question: "Did you hear about the pencil with two erasers?",
            answers: ["it's pointless", "it is pointless", "it was pointless"],
            response: "It was POINTLESS!",
        },
        {
            question: "How many tickles does it take to make an octopus laugh?",
            answers: ["10 tickles", "ten tickles"],
            response: "TEN TICKLES!",
        },
        {
            question: "How do you organise a space party?",
            answers: ["planet", "you planet"],
            response: "You PLANET!",
        },
        {
            question: "What do you call a fake noodle?",
            answers: ["impasta", "an impasta"],
            response: "An IMPASTA!",
        },
        {
            question: "How do celebrities stay cool?",
            answers: ["many fans", "they have many fans"],
            response: "An IMPASTA!",
        },
        {
            question: "Which town do you go to if you want a good scare?",
            answers: ["kiamboo", "kiam-boo"],
            response: "Kiam-BOO!",
        }
    ];
    const randJoke = Math.floor(Math.random() * jokes.length);

    const laughs = ["Hahahahahaha xD", "ROFLMAO xDD", "I'm dying! xDD", "Too funny lol xD", "Hilarious! xDDD"];
    const randLaugh = Math.floor(Math.random() * laughs.length);

    readline.question(`${jokes[randJoke]["question"]}\n>> `, response => {
        const lcResponse = response.toLowerCase();
        const answers = jokes[randJoke]["answers"];
        const responseGen = () => {
            if (answers.includes(lcResponse)) {
                console.log(disappointed);
            } else {
                console.log(`\n${jokes[randJoke]["response"]} ${laughs[randLaugh]}`);
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
            setTimeout(jokeGen, 2000);
        } else if (lcResponse === "no") {
            setTimeout(() => {
                console.log("\nBummer. Until next time, then!");
                readline.close();
                process.exit(0);
            }, 500);
        } else {
            setTimeout(() => {
                console.log(`\nI didn't catch that, but I'm guessing you wanna go again. ${yesArray[randYes]}\n`)
            }, 500);
            setTimeout(jokeGen, 2000);
        }
    });
}

/* CALLING FUNCTIONS */

scriptInit();