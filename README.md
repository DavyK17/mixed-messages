# Mixed Messages

For my "Mixed Messages" portfolio project, my program auto-generates a random dad joke from a list of 10 in total. The program has a simplified version and an interactive version that uses the Node.js `readline` module.

## Simplified version
The program simply auto-generates a joke every time it is run. To run the program from the working directory, use `node script.js` in your Node.js command line interface.

## Interactive version
The program uses the Node.js `readline` module to set up a joke with a question to which the user must guess the punchline; if the answer is wrong, the program provides the punchline and rolls on the floor laughing. If the answer is correct, the program expresses disappointment and asks the user if they would like another joke. The program into 3 separate functions that work in tandem: a greeting function `scriptInit()` , the joke generator `jokeGen()` and the repeat question sequence `goAgain()`.

To run the program from the working directory, use `node script-adv.js` in your Node.js command line interface.
