async function callToServer() {
	try {
		const promiseOne = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1',
		);
		const data = await promiseOne.json();
		// console.log(data)
		return data;
	} catch (error) {}
}

async function secondCallToServer() {
	try {
		const promiseTwo = await fetch(
			'https://jsonplaceholder.typicode.com/users/1',
		);
		const data = await promiseTwo.json();
		// console.log(data)
		return data;
	} catch (error) {}
}

const promiseOne = await Promise.all([callToServer(), secondCallToServer()]);
console.log(promiseOne);

const promiseTwo = await Promise.race([callToServer(), secondCallToServer()]);
console.log(promiseTwo);
