# Mixed Messages

For my "Mixed Messages" portfolio project, my program auto-generates dad jokes.

Previously, I had the program use the Node.js readline module to set up a joke with a question to which the user must guess the punchline; if the answer is wrong, the program provides the punchline and rolls on the floor laughing. If the answer is correct, the program expresses disappointment and repeats the process. I divided the program into 3 separate functions that should be working in tandem: the greeting function `scriptInit()` , the joke generator `jokeGen()` and the repeat question sequence `goAgain()` .

However, I ran into issue where the program stalls in my command line when one function calls another (e.g. when I move from `scriptInit()` to `jokeGen()` , the program stalls after I provide a `response` to guess the punchline). I then decided to simplify the code and just have the program generate jokes without user input; I could revisit the advanced version later on.

