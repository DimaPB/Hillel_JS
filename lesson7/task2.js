function reFunction(num) {
    console.log(num)
    if (num != 0) {
        return reFunction(num - 1)
    }
    
}
reFunction(5)