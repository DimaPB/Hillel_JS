class Links {
	static async callToServer() {
		try {
			const promiseOne = await fetch(
				'https://jsonplaceholder.typicode.com/todos/1',
			);
			const data = await promiseOne.json();
			// console.log(data)
			return data;
		} catch (error) {}
	}

	static async secondCallToServer() {
		try {
			const promiseOne = await fetch(
				'https://jsonplaceholder.typicode.com/users/1',
			);
			const data = await promiseOne.json();
			// console.log(data)
			return data;
		} catch (error) {}
	}
}

class ApiResolver {
	static async allPromise() {
		try {
			const result = await Promise.all([
				Links.callToServer(),
				Links.secondCallToServer(),
			]);
			return console.log(result);
		} catch (error) {}
	}
	static async racePromise() {
		try {
			const result = await Promise.race([
				Links.callToServer(),
				Links.secondCallToServer(),
			]);
			return console.log(result);
		} catch (error) {}
	}
}

// await FirstOne.callToServer()
// await SecondOne.secondCallToServer()

await ApiResolver.allPromise();
await ApiResolver.racePromise();
