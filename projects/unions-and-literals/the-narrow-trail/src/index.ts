export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let availableResource: "food" | "water" | undefined;
	let day = 1;
	let food = 5;
	let water = 5;

	while (day <= 7) {
		let roll = Math.floor(Math.random() * 6) + 1;
		if (roll === 1) {
			availableResource = "food";
		} else if (roll === 2) {
			availableResource = "water";
		} else {
			if (availableResource === "food") {
				food += roll;
				availableResource = undefined;
			} else if (availableResource === "water") {
				water += roll;
				availableResource = undefined;
			} else {
				if (roll % 2 === 0) {
					availableResource = "food";
				} else {
					availableResource = "water";
				}
			}
		}
		day++;
		food--;
		water--;
		if (food === 0 || water === 0) {
			return false;
		}
	}
	return true;
}
