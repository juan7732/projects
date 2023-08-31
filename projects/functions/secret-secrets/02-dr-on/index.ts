// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type OnText = (text: string) => string;

type AdvancedCipherGenerator = (
	onVowel: OnText,
	onConsonant: OnText,
	onPunctuation: OnText
) => OnText;

export const createAdvancedCipher: AdvancedCipherGenerator = (
	onVowel,
	onConsonant,
	onPunctuation
) => {
	return (text: string) => {
		let result = text.split("");
		let vowelRegex = /[aeiou]/i;
		let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;

		for (let i = 0; i < result.length; i++) {
			if (vowelRegex.test(result[i])) {
				result[i] = onVowel(result[i]);
			} else if (consonantRegex.test(result[i])) {
				result[i] = onConsonant(result[i]);
			} else {
				result[i] = onPunctuation(result[i]);
			}
		}
		return result.join("");
	};
};
