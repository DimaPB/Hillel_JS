// Завдання 1: Визначення рівня успішності студента 

const avarageGrade = 91

if (avarageGrade < 60) {
    console.log("Незадовільно")
} else if (avarageGrade >= 60 && avarageGrade <= 70){
    console.log("Задовільно")
} else if (avarageGrade >= 71 && avarageGrade <= 80){
    console.log("Добре")
} else if (avarageGrade >= 81 && avarageGrade <= 90){
    console.log("Дуже добре")
} else {
    console.log("Відмінно")
}