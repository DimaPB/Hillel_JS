const car1 = {
	brand: 'Nisan',
	model: 'Skyline',
	year: 2004,
};

const car2 = {
	brand: 'Doge',
	model: 'Challenger',
	owner: 'Piter',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
