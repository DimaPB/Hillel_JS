const handleEven = () => {
    return console.log("Number is even")
}

const handleOdd = () => console.log("Number is odd")


let handleNum = (a, first, second) => {
    a % 2 ? second(handleOdd) : first(handleEven)



}
handleNum(5.5, handleEven, handleOdd)
handleNum(4, handleEven, handleOdd)


