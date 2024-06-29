
// // Խնդիր 11: Պատահական Boolean արժեք 
// // Գեներացնել պատահական Boolean արժեք (true կամ false):

// function getRandomBoolean() {
//     return Math.random() < 0.5; 
// }
// let randomBool = getRandomBoolean();
// console.log(randomBool); 

// console.log(Math.random())

// let count1 = 0;
// let count2 = 0;
// for(let i = 0; i < 10000000; i++){
//     if(getRandomBoolean()){
//         count1++

//     }else {
//        count2++
//     }
    
// }
// console.log(count1)
// console.log(count2)
//գրել ֆուկցիա, որը պարզում է 
//տրված բնական թվի թվանշանների գումարը զույգ է թե կենտ ։

// function isSumOfDigitsEvenOrOdd(number) {
//     let sum = 0;
//     let numStr = number.toString();
//     for (let i = 0; i < numStr.length; i++) {
//         sum += parseInt(numStr[i]); 
//     }
//     if (sum % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
// let number = 12345;
// console.log(`The sum of digits of ${number} is ${isSumOfDigitsEvenOrOdd(number)}.`); 

// function isSumofDigitsEvenOrOdd(number){
// let sum = 0;
// while(number !== 0){
// let c = number % 10
// sum = sum + c
// number = (number - c) / 10
// }
// if(sum % 2 == 0){
//     return true
// }
// return false


// }
// console.log(isSumofDigitsEvenOrOdd(113))

// Խնդիր 14: Պատահական ուղղություն 
// Գեներացնել պատահական ուղղություն (N, NE, E, SE, S, SW, W, NW):


// function RandomDiretion(){
//     let arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"]
//     let index = Math.floor(Math.random() * arr.length)
//     return arr[index]
    
// }
// console.log(RandomDiretion())

// Խնդիր 9: Պատահական բառեր նախադասությունից 
// Ընտրել պատահական մեկ բառ նախադասությունից:

// function RandomSentence(toString){
// let arr = toString.split(" ")
// let index = Math.floor(Math.random() * arr.length)
// return arr[index]

// }
// console.log(RandomSentence("Barev Alen Jan Vonc Es"))


// Խնդիր 10: Պատահական գաղտնաբառ 
// Գեներացնել պատահական գաղտնաբառ նշված երկարությամ

function GetRandomPasswor(length){
    let x = ""
    for(let i = 0; i < length; i++){
        let RandomNum = Math.floor(Math.random() * 94 + 33)
        x =  String.fromCharCode(RandomNum) + x
    
    }
    return x 
    
}
console.log(GetRandomPasswor(100))



