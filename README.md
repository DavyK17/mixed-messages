# Mixed Messages

For my "Mixed Messages" portfolio project on [Codecademy](https://codecademy.com/), my program auto-generates a random dad joke from a list of 20 in total. The program has a simplified version and an interactive version.

The program can be run on any Node.js-supported command line interface (CLI), but the following instructions are specific to Windows as that is the operating system that I personally use and am most familiar with.

## Requirements
The program requires Node.js to work in your CLI. To install Node.js on your computer, visit https://nodejs.org/en/. If you'd like a step-by-step guide, [this W3Schools tutorial](https://www.w3schools.com/nodejs/nodejs_get_started.asp) provides simple instructions for users to follow.

## Running the program
To download the program to your computer, click on the **green "Code" button** above and select **Download ZIP**. If you're unfamiliar with navigating between directories on Command Prompt, be sure to extract the files to your `C:\Users\<username>` folder; otherwise, you may [read this article](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/) for a quick tutorial on how to change directories.

### Simplified version
The program simply auto-generates a joke each time it is run. To run the program from the working directory, use the command `node script.js`.

### Interactive version
The program uses the Node.js [`readline`](https://nodejs.org/api/readline.html) module to set up a joke with a question to which the user must guess the punchline; if the answer is wrong, the program provides the punchline and rolls on the floor laughing. If the answer is correct, the program expresses disappointment and asks the user if they would like another joke. The program is divided into 3 separate functions that work in tandem: the greeting function `scriptInit()` , the joke generator `jokeGen()` and the repeat question sequence `goAgain()`.

To run the program from the working directory, use the command `node script-adv.js`.

### Fixing overlapping text

At certain points, text from the program may overlap in the CLI and make it difficult to read your inputs and incoming messages moving forward. To fix this, exit the program by pressing **Ctrl+C** and use the `cls` command to clear the terminal before running the program again.
