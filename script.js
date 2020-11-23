/* JOKE RANDOMISER */

const jokeGen = () => {
    const jokes = [{
            question: "What do you call a government contract signed in a pub?",
            response: "A BAR TENDER!",
        },
        {
            question: "What kind of shoes to artists wear?",
            response: "SKECHERS!",
        },
        {
            question: "What do you get from a pampered cow?",
            response: "SPOILED MILK!",
        },
        {
            question: "What's an astronaut's favourite part of the computer?",
            response: "The SPACE BAR!",
        },
        {
            question: "What did the coffee report to the police?",
            response: "A MUGGING!",
        },
        {
            question: "What's orange and sounds like a parrot?",
            response: "A CARROT!",
        },
        {
            question: "Did you know the first French fries weren't actually cooked in France?",
            response: "They were cooked in GREECE!",
        },
        {
            question: "When does a dad joke become a dad joke?",
            response: "When it becomes APPARENT!",
        },
        {
            question: "What do you call someone with no body and no nose?",
            response: "NOBODY KNOWS!",
        },
        {
            question: "What is the least spoken language in the world?",
            response: "SIGN LANGUAGE!",
        },
        {
            question: "What does a baby computer call his father?",
            response: "DATA!",
        },
        {
            question: "What do you call an illegally parked frog?",
            response: "A TOAD!",
        },
        {
            question: "How does a leopard change its spots?",
            response: "By MOVING!",
        },
        {
            question: "Why can't you trust atoms?",
            response: "They MAKE UP EVERYTHING!",
        },
        {
            question: "Did you hear about the pencil with two erasers?",
            response: "It was POINTLESS!",
        },
        {
            question: "How many tickles does it take to make an octopus laugh?",
            response: "TEN TICKLES!",
        },
        {
            question: "How do you organise a space party?",
            response: "You PLANET!",
        },
        {
            question: "What do you call a fake noodle?",
            response: "An IMPASTA!",
        },
        {
            question: "How do celebrities stay cool?",
            response: "They have MANY FANS!",
        },
        {
            question: "Which town do you go to if you want a good scare?",
            response: "Kiam-BOO!",
        }
    ];
    const randNum = Math.floor(Math.random() * jokes.length);

    setTimeout(() => {
        console.log(jokes[randNum]["question"]);
    }, 500);

    setTimeout(() => {
        console.log("\n...\n");
    }, 2500);

    setTimeout(() => {
        console.log(jokes[randNum]["response"]);
    }, 5000);
}

/* CALLING FUNCTION */

jokeGen();