const ageFunc = (age) => Number(age) >= 18  ? true : false

result = ageFunc(19) == true ? console.log("Age is valid"): 
console.log("Age is invalid")
