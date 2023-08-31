// Write your createCodeCracker function here! ✨
// You'll need to export it so the tests can run it.

type CodeCrackingSettings = {
	attempts: number;
	makeGuess: (text: string, attempt: number) => string;
	validateGuess: (guess: string) => boolean;
};

type CodeCracker = (text: string) => string | undefined;

export const createCodeCracker = (opts: CodeCrackingSettings) => {
	const codeCracker: CodeCracker = (text) => {
		let currAttempt = 0;

		while (currAttempt < opts.attempts) {
			let currGuess = opts.makeGuess(text, currAttempt);
			if (opts.validateGuess(currGuess)) {
				return currGuess;
			}
			currAttempt++;
		}

		return undefined;
	};

	return codeCracker;
};
