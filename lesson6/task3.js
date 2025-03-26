function chechOrder(avaliable, ordered) {
	switch (true) {
		case ordered == 0:
			return console.log('Your order is empty');
		case avaliable < ordered:
			return console.log(
				'Your order is too large, we don’t have enough goods.',
			);
		case avaliable >= ordered:
			return console.log('Your order is accepted.');
	}
}

result = chechOrder(2, 2);
result = chechOrder(2, 0);
result = chechOrder(2, 1);
