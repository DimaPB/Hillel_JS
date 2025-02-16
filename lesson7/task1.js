const handleEven = () =>{
    return console.log("Nimber is even")
}

const handleOdd = () => console.log("Nimber is odd")


let handleNum = (a, firs, second) => {
    a % 2 ? firs(handleEven): second(handleOdd)

}
handleNum(5, handleEven, handleOdd)
handleNum(4, handleEven, handleOdd)


