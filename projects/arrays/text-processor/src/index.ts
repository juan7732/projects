// Write your alignTexts function here! ✨
// You'll need to export it so the tests can run it.
type AlignOption = "left" | "middle" | "right";

export type AlignmentOptions = {
	align?: AlignOption;
	width: number;
};

const leftAlign = (text: string, padAmount: number) => {
	return text.concat(" ".repeat(padAmount));
};

const middleAlign = (text: string, padAmount: number) => {
	let leftAmount = Math.floor(padAmount / 2);
	let rightAmount = Math.ceil(padAmount / 2);
	return " ".repeat(leftAmount).concat(text).concat(" ".repeat(rightAmount));
};

const rightAlign = (text: string, padAmount: number) => {
	return " ".repeat(padAmount).concat(text);
};

const handleAlign = (text: string, alignOption: AlignmentOptions) => {
	if (text.length >= alignOption.width) {
		return text;
	}

	let padAmount = alignOption.width - text.length;

	if (!alignOption || alignOption.align === "right") {
		return rightAlign(text, padAmount);
	} else if (alignOption.align === "middle") {
		return middleAlign(text, padAmount);
	} else {
		return leftAlign(text, padAmount);
	}
};

export const alignTexts = (texts: string[], options: AlignmentOptions) => {
	const result: string[][] = [];

	for (let i = 0; i < texts.length; i++) {
		let words = texts[i].split(" ");
		const lines: string[] = [];

		while (words.length > 0) {
			let curWord = words[0];
			words = words.slice(1);

			if (curWord.length >= options.width - 1) {
				lines.push(handleAlign(curWord, options));
			} else {
				while (
					words[0] &&
					curWord.length + (words[0].length + 1) <= options.width
				) {
					let newWord = words[0];
					words = words.slice(1);
					curWord = [curWord, newWord].join(" ");
				}
				lines.push(handleAlign(curWord, options));
			}
		}
		result.push(lines);
	}

	return result;
};
