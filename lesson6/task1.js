function square1(width, hight) {
	return width * hight;
}
const result_1 = square1(5, 10);
console.log(result_1);

const newFunc = function (width, hight) {
	return width * hight;
};
console.log(newFunc(5, 15));

const arrowFunc = (width, hight) => width * hight;

console.log(arrowFunc(10, 11));
