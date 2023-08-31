// Write your createCipher function here! ✨
// You'll need to export it so the tests can run it.
type CipherFactory = (cipher: Cipher) => Cipher;
type Cipher = (text: string) => string;

export const createCipher: CipherFactory = (cipher: Cipher) => {
	return (text: string) => {
		let result = text.split("");

		for (let i = 0; i < result.length; i++) {
			result[i] = cipher(text[i]);
		}

		return result.join("");
	};
};
