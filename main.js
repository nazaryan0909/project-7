
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

// function GetRandomPasswor(length){
//     let x = ""
//     for(let i = 0; i < length; i++){
//         let RandomNum = Math.floor(Math.random() * 94 + 33)
//         x =  String.fromCharCode(RandomNum) + x
    
//     }
//     return x 
    
// }
// console.log(GetRandomPasswor(100))

// Խնդիր 13: Պատահական հեռախոսահամար 
// Գեներացնել պատահական հեռախոսահամար ձևաչափով XXX-XXX-XXXX: 
// Խնդիր 16: Պատահական Hexadecimal Գույնի Գեներացիա 
// Գեներացնել պատահական հեքսադեցիմալ գույնի արժեք: 
// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM) 
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:

// function generateRandomPhoneNumber() {
//     const num1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
//     const num2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100; 
//     const num3 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; 
//     const phoneNumber = `${num1}-${num2}-${num3}`;
    
//     return phoneNumber;
// }
// const randomPhoneNumber = generateRandomPhoneNumber();
// console.log(randomPhoneNumber);

// function randomPhoneNum(){
//  let RandomDigit = ()=>Math.floor(Math.random() * 10)
//  return `${RandomDigit()}${RandomDigit()}${RandomDigit()}-${RandomDigit()}${RandomDigit()}${RandomDigit()}-${RandomDigit()}${RandomDigit()}${RandomDigit()}`
 
// }
// console.log(randomPhoneNum())

// function generateRandomHexColor(){
//     const randomColor = Math.floor(Math.random() * 16777215); 
//     const hexColor = '#' + randomColor.toString(16).padStart(6, '0'); 
//     return hexColor;
// }
// const randomHexColor = generateRandomHexColor();
// console.log(randomHexColor);

// function randomHexColor(){
//     let x = "123456789ABCDEF"
//     let color = "#"
//     for(let i = 0; i < 6; i++){
//       let index = Math.floor(Math.random() * x.length)
//       color = color + x[index]
//     }
//     return color
// }
// console.log(randomHexColor())

// Խնդիր 19: Պատահական ժամանակ գեներացիա (HH:MM) 
// Գեներացնել պատահական ժամանակ ձևաչափով HH:MM:

// function randomClock(){
//     let RandomHours = Math.floor(Math.random() * 24)
//     let RandomMinutes = Math.floor(Math.random() * 60)
//     return ` ${RandomHours}:${RandomMinutes}`

// }
// console.log(randomClock())


// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// const inputString = "hello";
// const reversedString = reverseString(inputString);
// console.log(reversedString); 

// function maxArr(arr){
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if
//     }
// }

// 1. Տրված են a և b բնական թվերը: Արտածել YES, եթե  
// ա) դրանք երկուսն էլ կենտ են, 
//  բ) դրանցից գոնե մեկը կենտ է,  
// գ) դրանցից ճիշտ մեկը կենտ է,  
// դ) դրանք երկուսն էլ կենտ են կամ երկուսն էլ զույգ:  
// Հակառակ դեպքում արտածել NO: 
// 2. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրանցից  
// ա) գոնե մեկը զրո է,  
// բ) ճիշտ մեկը հինգ է,  
// գ) ոչ մեկը մյուսներին հավասար չէ,  
// դ) ճիշտ երկուսն են հավասար,  
// ե) բոլոր երեքն իրար հավասար են,  
// զ) գոնե մեկը բացասական է,  
// Հակառակ դեպքում արտածել NO

// ա) գոնե մեկը զրո է,  

// function A1(a, b) {
//     if (a % 2 === 1 && b % 2 === 1) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// console.log(A1(3, 5)); 
// console.log(A1(2, 5)); 

//  բ) դրանցից գոնե մեկը կենտ է,  


// function A2(a, b) {
//     if (a % 2 === 1 || b % 2 === 1) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// // Example usage:
// console.log(A2(2, 5)); 
// console.log(A2(4, 6)); 

// function A3(a, b) {
   
//     if ((a % 2 === 1 && b % 2 === 0) || (a % 2 === 0 && b % 2 === 1)) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }

// console.log(A3(3, 4)); 
// console.log(A3(2, 4)); 
// console.log(A3(3, 5)); 

// function A4(a, b) {
    
//     if ((a % 2 === 1 && b % 2 === 1) || (a % 2 === 0 && b % 2 === 0)) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }


// console.log(A4(3, 5)); 
// console.log(A4(2, 4)); 
// console.log(A4(2, 5)); 


// 2. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե դրանցից  
// ա) գոնե մեկը զրո է,  
// բ) ճիշտ մեկը հինգ է,  
// գ) ոչ մեկը մյուսներին հավասար չէ,  
// դ) ճիշտ երկուսն են հավասար,  
// ե) բոլոր երեքն իրար հավասար են,  
// զ) գոնե մեկը բացասական է,  
// Հակառակ դեպքում արտածել NO

// ա) գոնե մեկը զրո է,  

// function A2(a, b, c){
//   if(a == 0 || b == 0 || c == 0){
//     return "yes"
//   } else {
//     return "no"
//   }
// }
// console.log(A2(2, 1, 0))

// բ) ճիշտ մեկը հինգ է,  

// function A3(a, b, c){
//     if((a == 5 && b !== 5 && c !== 5) || (b == 5 && a !== 5 && c !== 5) || (c ==5 && a !== 5 && b !== 5)){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A3(4, 5, 6))

// function A3(a, b, c){
//     let count = 0;
//     if(a == 5){
//         count++
//     }
//     if(b == 5){
//         count++
//     }
//     if(c == 5){
//         count++
//     }
//     if(count == 1){
//         return "yes"
//     }
//     return "no"
    
// }
// console.log(A3(2, 5, 7))

// գ) ոչ մեկը մյուսներին հավասար չէ,  

// function A4(a, b, c){
//     if(a !== b && b !== c){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A4(3, 6, 2))

// դ) ճիշտ երկուսն են հավասար,  

// function A5(a, b, c){
//     if(a == b && b !==c || b == c && b !== a || a == c && c !== b){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A5(2, 1, 8))

// function A5(a, b, c){
//     let count = 0;
//     if(a == b){
//         count++
//     }
//     if(b == c){
//         count++
//     }
//     if(a == c){
//         count++
//     }
//     if(count == 1){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A5(1, 2, 3))

// ե) բոլոր երեքն իրար հավասար են,  

// function A6(a, b, c){
//     let count = 0;
//     if(a == b){
//         count++
//     }
//     if(b == c){
//         count++
//     }
//     if(a == c){
//         count++
//     }
//     if(count == 3){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A6(4, 4, 4))
// զ) գոնե մեկը բացասական է,  

// function A7(a, b, c){
//     let count = 0;
//     if(a < 0){
//    count++
//     }
//     if(b < 0){
//         count++
//     }
//     if(c < 0){
//         count++
//     }
//     if(count > 0){
//       return "yes"
//     }
//     return "no"
// }
// console.log(A7(-1, -3, 5))

// 3. Տրված են a, b և c ամբողջ թվերը: Արտածել YES, եթե  
// ա) երեքն էլ դրական են,  
// բ) դրանցից գոնե մեկը դրական է,  
// գ) դրանցից ճիշտ մեկը դրական է,  
// դ) դրանցից ճիշտ երկուսը դրական են,  
// ե) դրանցից գոնե երկուսն իրար հավասար են,  
// Հակառակ դեպքում արտածել NO:

// ա) երեքն էլ դրական են,  

// function A3(a, b, c){
//    let count = 0;
//     if(a > 0){
//       count++
//     }
//     if(b > 0){
//         count++
//     }
//     if(c > 0){
//         count++
//     }
//     if(count == 3){
//         return "yes"
//     }
//     return "no"
// }
// console.log(A3(2, 1, 4))

// բ) դրանցից գոնե մեկը դրական է,  

// function B3(a, b, c){
//    let count = 0;
//     if(a > 0){
//       count++
//     }
//     if(b > 0){
//         count++
//     }
//     if(c > 0){
//         count++
//     }
//     if(count >= 1){
//         return "yes"
//     }
//     return "no"
// }
// console.log(B3(2, 1, 4))

// գ) դրանցից ճիշտ մեկը դրական է,  

// function G3(a, b, c){
//    let count = 0;
//     if(a > 0){
//         count++
//     }
//     if(b > 0){
//         count++
//     }
//     if(c > 0){
//         count++
//     }
//     if(count == 1){
//         return "yes"
//     }
//     return "no"
// }
// console.log(G3(1, -3, -8))
// // դ) դրանցից ճիշտ երկուսը դրական են,  

// function D3(a, b, c){
//    let count = 0;
//     if(a > 0){
//         count++
//     }
//     if(b > 0){
//         count++  
//       }
//     if(c > 0){
//         count++
//     }
//     if(count == 2){
//         return "yes"
//     }
//     return "no"
// }
// console.log(D3(1, 5 -8))

// ե) դրանցից գոնե երկուսն իրար հավասար են,  

// function E3(a, b, c){
//     let count = 0;
//     if(a == b){
//       count++
//     }
//     if(b == c){
//         count++
//     }
// if(a == c){
//     count++
// }
//     if(count > 0){
//         return "yes"
//     }
//     return "no"
// }
// console.log(E3(3, 1, 3))

// Հակառակ դեպքում արտածել NO:

function Z3(a, b, c){
    let count = 0;
    if(a + b  == 0){
       count++
    }
    if(b + c == 0){
        count++
    }
    if(a + c == 0){
        count++
    }
    if(count > 0){
        return "yes"
    }
    return "no"
}
console.log(Z3(-4, 4, 6))