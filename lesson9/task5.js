const users = [
	{
		firstName: 'Woody',
		secondName: 'Harrelson',
		age: 63,
		email: 'chillguy@gmail.com',
	},
	{
		firstName: 'Matthew',
		secondName: 'McConaughey',
		age: 55,
		email: 'Lincoln@gmail.com',
	},
	{
		firstName: 'Colin',
		secondName: 'Farrell',
		age: 48,
		email: 'penguin@gmail.com',
	},
];
for (const { firstName, secondName, age, email } of users) {
	console.log(firstName, secondName, age, email);
}
