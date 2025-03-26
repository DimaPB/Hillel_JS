let positiveCount = 0;
let neagtiveCount = 0;
let zeroCount = 0;

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

for (let number of numbers) {
	if (number > 0) {
		positiveCount++;
	} else if (number < 0) {
		neagtiveCount++;
	} else {
		zeroCount++;
	}
}
console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${neagtiveCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
