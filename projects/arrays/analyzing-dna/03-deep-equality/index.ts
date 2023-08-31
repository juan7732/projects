// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.
export const deepEquality = (a: string[][], b: string[][]) => {
	if (a.length !== b.length) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i].length !== b[i].length) {
			return false;
		}
		for (let j = 0; j < a[0].length; j++) {
			if (a[i][j] !== b[i][j]) {
				return false;
			}
		}
	}

	return true;
};
