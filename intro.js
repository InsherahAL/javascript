let mark = 54
let result = ''
if (mark>=90) {
    result=`${mark} excellent`
} else if (mark>=80) {
    result=`${mark} very good`
} else if (mark>=70) {
    result=`${mark} good`
} else if (mark>=60) {
    result=`${mark} fair`
} else {
    result=`${mark} failed`
}
  console.log(result);  
const c = 19
const f = (c * 1.8) + 32
console.log(f);
let num = 66
let isOdd = num % 2 ==true
let isEven = !(num % 2) ==false
console.log(isOdd);
console.log(isEven);
let firstName = 'Insherah'
let lastName = 'abu-libdeh'
let fullName = firstName+" " +lastName
let birthYear = 2005
let currentYear = 2022
let age = currentYear - birthYear
let greet = `hello I am ${fullName} and i am ${age} `
console.log(greet);