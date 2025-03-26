function callToServer() {
	// return Promise.reject(new Error("Фейкова помилка у callToServer!"));
	return fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}

// callToServer()
//     .then(data => {
//         console.log(data);
//     })

function secondCallToServer() {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((data) => {
			return data;
		});
}

// secondCallToServer()
//     .then(data => {
//         console.log(data);
//     })

const promiseOne = Promise.all([callToServer(), secondCallToServer()])
	.then((answer) => {
		console.log(answer);
	})
	.catch((error) => console.error('Error:', error));

const promiseTwo = Promise.race([callToServer(), secondCallToServer()])
	.then((answer) => {
		console.log(answer);
	})
	.catch((error) => console.error('Error:', error));
