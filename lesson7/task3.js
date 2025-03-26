function divide(numerator, denominator) {
	if (typeof numerator !== 'number' || typeof denominator !== 'number') {
		throw new Error('Not a number');
	}

	if (denominator == 0) {
		throw new Error('denominator can not be 0');
	}
	return console.log(numerator / denominator);
}

function resultCheck(numerator, denominator) {
	try {
		divide(numerator, denominator);
	} catch (error) {
		console.error(error.message);
	} finally {
		console.log('Робота завершена');
	}
}

resultCheck(5, 2);
resultCheck(10, 0);
resultCheck('10', 2);

console.log(
	'--------------------------------------------------------------------',
);
//The solution to the condition

try {
	divide(5, 2);
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}

try {
	divide(10, 0);
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}

try {
	divide('10', 0);
} catch (error) {
	console.error(error.message);
} finally {
	console.log('Робота завершена');
}
