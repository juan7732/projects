// Write your createKitchen function here! ✨
// You'll need to export it so the tests can run it.

export type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
};

export type Cleaner = (dirt: number, time?: number) => number;
export type Supplier = (expense: number) => Stock;
export type Recipe = (
	stock: Stock
) => { succeeded: false } | { succeeded: true; newStock: Stock };

export type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
	dirt: number;
	stock: Stock;
	budget: number;
};

export type KitchenBuilder = (
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
) => Kitchen;

export const createKitchen: KitchenBuilder = (budget, cleaner, supplier) => {
	let kitchen: Kitchen = {
		budget: budget,
		dirt: 0,
		stock: {
			breads: 0,
			fruits: 0,
			sauces: 0,
			vegetables: 0,
		},
		announce() {
			return `I have ${this.dirt} much dirt, ${this.budget} budget, ${this.stock.breads} bread(s), ${this.stock.fruits} fruit(s), ${this.stock.sauces} sauce(s), and ${this.stock.vegetables} vegetable(s).`;
		},
		clean(time) {
			this.dirt = cleaner(this.dirt, time);
		},
		purchase(expense) {
			if (this.budget >= expense) {
				let stockAdd = supplier(expense);
				let key: keyof Stock;
				for (key in this.stock) {
					this.stock[key] += stockAdd[key];
				}
				this.budget -= expense;
				return true;
			}
			return false;
		},
		prepare(recipe) {
			if (this.dirt < 100) {
				let result = recipe(this.stock);
				if (result.succeeded) {
					this.stock = result.newStock;
				}
				this.dirt++;
				return result.succeeded;
			} else {
				return false;
			}
		},
	};

	return kitchen;
};
