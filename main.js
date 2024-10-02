
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

// function Z3(a, b, c){
//     let count = 0;
//     if(a + b  == 0){
//        count++
//     }
//     if(b + c == 0){
//         count++
//     }
//     if(a + c == 0){
//         count++
//     }
//     if(count > 0){
//         return "yes"
//     }
//     return "no"
// }
// console.log(Z3(-4, 4, 6))

// 4. Տրված է a դրական ամբողջ թիվը: Արտածել YES, եթե այն  
// ա) երկնիշ և զույգ թիվ է,  
// բ) եռանիշ և կենտ թիվ է:  
// Հակառակ դեպքում արտածել NO: 
 
// 5. Տրված է a եռանիշ թիվը: Արտածել YES, եթե  
// ա) նրա բոլոր թվանշանները տարբեր են,  
// բ) նրա թվանշանները կազմում են աճող հաջորդականություն, 
//  գ) այն սիմետրիկ (պոլինդրոմ) է, այսինքն աջից ձախ և ձախից աջ նույն կերպ է կարդացվում: Հակառակ դեպքում արտածել NO:

// function a5(n) {
//     if ((n >= 10 && n <= 99) && (n % 2 === 0)) {
//         return "yes";
//     } else {
//          return "no";
//     }
// }
// console.log(a5(101))

// function b5(a) {
//     if ((a >= 100 && a <= 999) && (a % 2 !== 0)) {
//         return "Yes";
//     } else {
//         return "no";
//     }
// }

// console.log(b5(123))

// let x = 2547609;
// x = x + ""
// let y = x[x.length-1]
// console.log(typeof y)
// if(y === 1 || y === 3 || y ===  5 || y === 7 || y === "9"){
//     console.log("yes")
// }else {
//     console.log("no")

// }

// console.log("9" === 9)
// //type of y


// 5. Տրված է a եռանիշ թիվը: Արտածել YES, եթե  
// ա) նրա բոլոր թվանշանները տարբեր են,  
// բ) նրա թվանշանները կազմում են աճող հաջորդականություն, 
//  գ) այն սիմետրիկ (պոլինդրոմ) է, այսինքն աջից ձախ և ձախից աջ նույն կերպ է կարդացվում: Հակառակ դեպքում արտածել NO:

// function a5(n){
//     n = n + ""
//     if(n[0] !== n[1] && n[0] !== n[2] && n[1] !== n[2]){
//       return "yes"
//     }
//     return "no"
// }
// console.log(a5(232))
// function b5(n){
//     n  = n + ""
//     if(n[1] > n[0] && n[2] > n[1]){
//         return "yes"
//     } 
//     return "no"
// }
// console.log(b5(123))

// function d3(n){
//     n = n + ""
//     if(n[0] == n[2]){
//         return "yes"
//     }
//     return "no"
// }
// console.log(d3(454))

// 10, Տրված են A և B(A<B) ամբողջ թվերը:  
// ա) Արտածել [A,B] հատվածին պատկանող 3-ին պատիկ առաջին թիվը:  
// բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը: 
//  գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:

// function b10(A, B) {
//     return ((B - A + 1) * (A + B)) / 2;
// }

// const A = 1; 
// const B = 10;
// console.log(b10(A, B));


// function g10(A, B) {
//     const amboxj = [];
//     for (let i = A; i <= B; i++) {
//         amboxj.push(i);
//     }
//     console.log("amboxj:", amboxj);
//     console.log("Count:", amboxj.length);
// }
// const A = 1; 
// const B = 10; 
// console.log(g10(A, B));

// 6. Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը  
// ա) հավասարակողմ է,  
// բ) հավասարասրուն է,  
//  գ) ուղղանկյուն է:  
// Հակառակ դեպքում արտածել NO: 
// 7. Տրված են երեք ամբողջ թվեր: Արտածել  
// ա) դրանցից փոքրագույնի արժեքը, 
//  բ) դրանցից մեծագույնի արժեքը  
// գ) մեծությամբ երկրորդ թվի արժեքը,

// function a6(a, b, c) {
//     return a === b && b === c ? "YES" : "NO";
// }

// const a = 5;
// const b = 5; 
// const c = 5;  
// console.log(a6(a, b, c)); 

// function a6(a, b, c){
//     if(a == b && b == c  ){
//         return "yes"
//     }
//     return "no"
// }
// console.log(a6(2, 2, 2))

// function b6(a, b, c) {
//     return (a === b || b === c || a === c) ? "YES" : "NO";
// }

// const a = 5; 
// const b = 5;
// const c = 3; 
// console.log(b6(a, b, c)); 

// function b6(a, b, c){
//     if(a == b || b == c || a == c){
//         return "yes"
//     }
//     return "no"
// }
// console.log(b6(3, 3, 2))

// function a6(a,b,c){
//    if((a**2 + b**2 == c**2) || (b**2 + c**2 == a**2) || (a**2 + c**2 == b**2)){
//            return "yes"
//    }
//    return "no"
// }
// console.log(a6(8,15,17))

// 7. Տրված են երեք ամբողջ թվեր: Արտածել  
// ա) դրանցից փոքրագույնի արժեքը, 
//  բ) դրանցից մեծագույնի արժեքը  
// գ) մեծությամբ երկրորդ թվի արժեքը,

// function a7(a,b,c){
//     if(a > b && a > c ){
//         return a
//     }else if(b > a && b > c ){
//         return b
//     }else {
//         return c
//     }
// }
// console.log(a7(3, 13, 9))

// function a8(a,b,c){
//     let max = a
//     if(b > max ){
//         max = b
//     }
//     if(c > max ){
//         max = c
//     }
//     return max
// }
// console.log(a8(22, 13, 3))

// function a9(a,b,c){
//     if(a < b && a < c){
//         return a
//     }else if(b < a && b < c){
//         return b
//     }else {
//         return c
//     }
    
// }
// console.log(a9(3, 19, 7))

// function a9(a,b,c){
//     let min = a
//     if(b < min){
//         min = b
//     }
//     if( c < min ){
//         min = c
//     }
//     return min
// }
// console.log(a9(1, 2, 4))

// գ) մեծությամբ երկրորդ թվի արժեքը,

// function a10(a,b,c){
//     let max = a;
//     if(b > max){
//         max = b
//     }
//     if(c > max){
//         max = c
//     }
//      let min = a;
//      if(b < min ){
//         min = b
//      }
//      if(c < min ){
//         min = c
//      }
//      let secondMax = a;
//      if(a > min && a < max ){
//         return a 
//      }
//      if(b > min && b < max ){
//         return b 
//      }
//      if(c > min && c < max ){
//         return c 
//      }
//      if(a == b || b == c || a == c){
//         return min 
//      }
// }
// console.log(a10(3, 3, 4))

// function a11(a,b,c,d){
//     let arr = [a,b,c,d]//9,8,7,6
//     arr.sort((a, b) => b - a)
//      return arr[1]
// }
// console.log(a11(3, 2, 5, 9))

// 8. Տրված են a,b,c իրական թվերը: Եթե դրանք դասավորված են աճման կամ 
// նվազման կարգով, դրանց արժեքները կրկնապատկել, հակառակ դեպքում յուրաքանչյուրի
//  նշանը փոխել: Արտածել ստացված թվերը:

//7,10,15

// function a12(a,b,c){
//     if((a < b && a < c) || (a > b && b > c)){
//         a = a * 2 ;
//         b = b * 2;
//         c = c * 2;

//     }else {
//         a = a * (-1);
//         b = b * (-1);
//         c = c * (-1);
//     }
//     return `${a} ${b} ${c}`
// }
// console.log(a12(-3, -2, 0))

// 10, Տրված են A և B(A<B) ամբողջ թվերը:  
// ա) Արտածել [A,B] հատվածին պատկանող 3-ին պատիկ առաջին թիվը:  
// բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը: 
//  գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:

// function a13(a,b){
//   for(let i = a; i <= b; i++){
//      if(i % 3 == 0){
//         return i
//      }
//   }
//   return "chka 3 in patik tiv"
// }
// console.log(a13(4,5))

// 10, Տրված են A և B(A<B) ամբողջ թվերը:  
// ա) Արտածել [A,B] հատվածին պատկանող 3-ին պատիկ առաջին թիվը:  
// բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը: 
//  գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:

// բ) Արտածել [A,B] հատվածին պատկանող բոլոր ամբողջ թվերի գումարը: 


// const b10 = (A, B) => {
//    return ((B - A + 1) * (A + B)) / 2;
// };
// const A = 1, B = 10;
// console.log(b10(A, B));

// let a = 1;
// let b = 10;
// let sum = 0;
// for(let i = a; i <= b; i++){
//    sum = sum + i
// }
// console.log(sum)


//  գ) Աճման կարգով արտածել [A,B] հատվածին պատկանող ամբողջ թվերը և դրանց քանակը:

// const g10 = (A, B) => {
//    const numbers = [];
//    for (let i = A; i <= B; i++) {
//        numbers.push(i);
//    }
//    console.log("Integers:", numbers);
//    console.log("Count:", numbers.length);
// };
// const A = 1, B = 10;
// g10(A, B);

// let a = -5;
// let b = 10;
// let count = 0;
// for(let i = a; i <= b; i++){
//    count++
//    console.log(i)
// }
// console.log("qanak " + count)

// 11. Արտածել տրված բնական թվի  
// ա) թվանշանների գումարը, քանակը, արտադրյալը,  
// բ) կենտ թվանշաններից ամենափոքրը,  
// գ) 4-ից մեծ կենտ թվանշանների գումարը,  
// դ) 7-ից փոքր զույգ թվանշանների արտադրյալը,  
// ե) ամենամեծ և ամենափոքր թվանշանների տարբերության քառակուսին:

// let num = 23045;
// let sum = 0;
// let count = 0;
// let multiplay = 1;

// while(num > 0){
//    let mnacord = num % 10;
//    sum = sum + mnacord;
//    multiplay = mnacord * multiplay;
//    num = (num - mnacord)/10;
//    count++
// }
// console.log(sum);
// console.log(count);
// console.log(multiplay);

// բ) կենտ թվանշաններից ամենափոքրը,  

// let num = 2222;
// let arr = [];
// let minOdd = Infinity;
// while(num > 0){
//    let mnacord = num % 10;
//    arr.push(mnacord);
//    num = (num - mnacord)/10;

// }
// for(let i = 0; i < arr.length; i++){
//    if((arr[i] % 2 !== 0) && (arr[i] < minOdd)){
//       minOdd = arr[i];
//    }
// }
// if(minOdd == Infinity){
//    console.log("kent tiv chka")
// }
// console.log(arr)
// console.log(minOdd)

// գ) 4-ից մեծ կենտ թվանշանների գումարը,  

//
// let num = 5927;
// let sum = 0;
// while(num > 0){
//    let mnacord = num % 10;
//    if((mnacord > 4) && (mnacord % 2 !== 0)){
//         sum = sum + mnacord
//    }
//    num = (num - mnacord)/10;
// }


// console.log(sum)
// . Տեղերով փոխել տրված թվի առաջին և վերջին թվանշանները: Օրինակ` 8547-ից պետք է ստացվի 7548: 
// 12. Տրված է բնական թիվ: Արտածել YES, եթե  
// ա) թվի թվանշանների մեջ կա 3 թվանշան,  
// բ) թվի թվանշանների մեջ չկա 5 թվանշան,  
// գ) թվի թվանշանները աճման կարգով են դասավորված,  
// դ) թվի թվանշանները նվազման կարգով չեն դասավորված,  
// ե) թվի թվանշանների գումարը մեծ է քսանից,  
// զ) թվի թվանշանների արտադրյալը փոքր է երեսունից:  
// Հակառակ դեպքում արտածել NO:

// function a12(num) {
//     if (num >= 100 && num <= 999) {
//         return "YES";
//     } else {
//         return "NO";
//     }
// }
// let number = 456; 
// let result = a12(number);
// console.log(result); 

// բ) թվի թվանշանների մեջ չկա 5 թվանշան,  
// console.log("abc".includes("d"))
// function b12(num) {
//     let numStr = num.toString();
//     if (numStr.includes('5')) {
//         return "NO";
//     } else {
//         return "YES";
//     }
// }
// let number = 1234;
// let result = b12(number);
// console.log(result);
// գ) թվի թվանշանները աճման կարգով են դասավորված,  

// function g12(num) {
//     let numStr = num.toString();
    
//     for (let i = 0; i < numStr.length - 1; i++) {
//         if (numStr[i] >= numStr[i + 1]) {
//             return "NO";
//         }
//     }
    
//     return "YES";
// }
// let number = 1234;
// let result = g12(number);
// console.log(result); 

// function d12(num) {
    
//     let numStr = num.toString();
//     for (let i = 0; i < numStr.length - 1; i++) {
//         if (numStr[i] < numStr[i + 1]) {
//             return "YES";
//         }
//     }
    
//     return "NO";
// }
// let number = 3210; 
// let result = d12(number);
// console.log(result);

// ե) թվի թվանշանների գումարը մեծ է քսանից,  

//  let num = 2498
//  console.log(2458 / 10)
//  console.log(Math.floor(2458 / 10))
//  let sum = 0;
//  while(num > 0){
//     let mnacord = num % 10
//     sum = sum + mnacord;
//     num = Math.floor(num / 10)
//  }
//  console.log(sum)
//  if(sum > 20){
//     console.log("yes")
//  }else {
//     console.log("no")
//  }

// զ) թվի թվանշանների արտադրյալը փոքր է երեսունից:  

// function e12(num){
//     let sum = 1;
//     while(num > 0){
//         let mnacord = num % 10;
//         sum = sum * mnacord;
//         num = Math.floor(num / 10)
//     }
//     if(sum < 30){
//         return "yes"
//     }
//     return "no"
// }
// console.log(e12(3021))
//1. % 10 i\
//2.  

// let num = 2319;
// let arr = []
// while(num > 0){
//     let mnacord = num % 10;
//     arr.unshift(mnacord)
//     num = Math.floor(num / 10)
// }
// let x = arr[0]
// arr[0] = arr[arr.length-1]
// arr[arr.length-1] = x


// let y = +arr.join("")

// function r12(num){
//     let arr = []
// while(num > 0){
//     let mnacord = num % 10;
//     arr.unshift(mnacord)
//     num = Math.floor(num / 10)
// }
// let x = arr[0]
// arr[0] = arr[arr.length-1]
// arr[arr.length-1] = x


// let y = +arr.join("")
// return y
// }
// console.log(r12(1342))

// 14, Տրված բնական թվի համար արտածել YES, եթե  
// ա) այն որևէ թվի ֆակտորիալ է,  
// բ) այն ֆիբոնաչիի թիվ է,  
// գ) այն կատարյալ թիվ է,  
// դ) այն պարզ թիվ է,  
// ե) այն սիմետրիկ թիվ է:  
// Հակառակ դեպքում արտածել NO

// function isFactorial(n) {
//     if (n < 1) {
//         return "NO";
//     }

//     let factorial = 1;
//     let k = 1;

//     while (factorial < n) {
//         k++;
//         factorial *= k;
//     }

//     return factorial === n ? "YES" : "NO";
// }
// const n = 14;
// console.log(isFactorial(n)); 

// function a12(n){
//     if(n < 1){
//         return "no"
//     }
//     let i = 1;
//     while (n > 1){
//         if(n % i !== 0){
//             return "no"
//         }
//         n = n / i
//         i++

//     }
//     return "yes"
// }
// console.log(a12(154896))

// բ) այն ֆիբոնաչիի թիվ է,  
// function a14(x) {
//     if (x < 0) return false;
//     let i = 0;
//     while (i * i < x) {
//         i++;
//     }
//     return i * i === x;
// }

// function isFibonacci(n) {
//     if (n < 0) {
//         return "NO";
//     }
//     return (a14(5 * n * n + 4) || a14(5 * n * n - 4)) ? "YES" : "NO";
// }
// let n = 13;
// console.log(isFibonacci(n));

// գ) այն կատարյալ թիվ է,  

// function g14(n) {
//     let original = n;
//     let reversed = 0;
//     while (n > 0) {
//         reversed = reversed * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }

//     return original === reversed ? "YES" : "NO";
// }
// let n = 141;
// console.log(g14(n));

// դ) այն պարզ թիվ է,  

// function d14(n) {
//     if (n <= 1) return "NO";
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return "NO";
//     }
//     return "YES";
// }

// let n = 14;
// console.log(d14(n));
// ե) այն սիմետրիկ թիվ է:  

// function isSymmetric(n) {
//     let original = n;
//     let reversed = 0;
//     while (n > 0) {
//         reversed = reversed * 10 + (n % 10);
//         n = Math.floor(n / 10);
//     }
//     return original === reversed ? "YES" : "NO";
// }
// let n = 14;
// console.log(isSymmetric(n));

//  let x = "Alen"
//  let y = "";
//  for(let i = 0; i < x.length; i++){
//     y = y + x[i]
//  }
// console.log(y)

// function gurgen(n){
//     let x = n + "";
//     let y = "";
//     for(let i = 0; i < x.length; i++){
//         y = x[i] + y
//     }
//    if(x == y){
//    return "yes"
//    }
//    return "no"
// }
// console.log(gurgen(141))

// 15. Տրված n բնական թվի համար արտածել ֆիբոնաչիի հաջորդականության n-րդ անդամը: 
// function fibonacci(n) {
    // function fibonacci(n) {
    //     if (n <= 0) {
    //         return 0;
    //     }
    //     if (n === 1) {
    //         return 1;
    //     }
    //     let a = 0, b = 1, temp;
    //     for (let i = 2; i <= n; i++) {
    //         temp = a + b;
    //         a = b;
    //         b = temp;
    //     }
    //     return b;
    // }
    // let result = fibonacci(10);
    // console.log(result);
    // 16. Ստուգել՝ տրված թվի թվանշանները ձախից աջ դիտարկելիս արդյո՞ք կազմում են նվազող
    // //  հաջորդականություն, թե ոչ: Օրինակ՝ 76431 թվի համար պատասխանը դրական է, իսկ 6331 և 9782 թվերի համար՝ բացասական: 
    // function b16(num) {
    //     let digits = num.toString().split('');
    //     console.log(digits)
    //     for (let i = 1; i < digits.length; i++) {
    //         if (digits[i] >= digits[i - 1]) {
    //             return false;
    //         }
    //     }
    //     return true;
    // }
    
    // let result = b16(76431);
    // console.log(result);
    
    // function g17(num) {
    //     let result = '';
    //     while (num > 0) {
    //         let digit = num % 10;
    //         result += digit + '0';
    //         num = Math.floor(num / 10);
    //     }
    //     return result;
    // }
    
    // let result = g17(125);
    // console.log(result);
    

    // 14, Տրված բնական թվի համար արտածել YES, եթե  
// ա) այն որևէ թվի ֆակտորիալ է,  
// բ) այն ֆիբոնաչիի թիվ է,  
// գ) այն կատարյալ թիվ է,  
// դ) այն պարզ թիվ է,  
// ե) այն սիմետրիկ թիվ է:  
// Հակառակ դեպքում արտածել NO

// բ) այն ֆիբոնաչիի թիվ է,  

// function isFibonacci(num){
//     let fib1 = 0;
//     let fib2 = 1;
//     let nextfib;
//     while (fib2 < num){
//         nextfib = fib1 + fib2;
//         fib1 = fib2;
//         fib2 = nextfib;

//     }
//     if(fib2 === num){
//         return "yes"
//     }
//     return "no"
// }
// console.log(isFibonacci(13))


// function isPerfectNumber(num){
//     let sum = 0;
//     for ( let i = 1; i <= num /2; i++){
//         if( num % i === 0){
//             sum = sum + i;
//         }
//     }
//     if(sum === num) {
//         return "yes";
//     }
//     return "no"
// }
// console.log(isPerfectNumber(28))
// for(let i = 1; i < 10000; i++){
//     if(isPerfectNumber(i) === "yes"){
//         console.log(i);
//     }
// }

// function isPrimeNumber(num){
//     if (num <= 1) {
//         return "no";
//     }
//     for(let i = 2; i*i <= num; i++){
//         if (num % i === 0) {
//             return "no";
//         }
//     }
//     return "yes"
// }

//  for(let i = 2000; i < 2500; i++){
//     if(isPrimeNumber(i) === "yes"){
//         console.log(i);
//     }
//  }

// 18. n թվանշան ունեցող բնական թիվը կոչվում է Արմսթրոնգի թիվ, եթե նրա թվանշանների n աստիճանների գումարը
//  հավասար է այդ թվին (օրինակ՝ 153=13 +53 +33 ): Արտածել բոլոր երկնիշ, եռանիշ և քառանիշ Արմսթրոնգի թվերը:
 
// 1.Տրված է իրական թվերի հաջորդականություն (Մասիվ): Արտածել այդ հաջորդականության  
// ա) այն տարրերի քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց, 

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let countSmallerThanSquare = 0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < i ** 2) {
//         countSmallerThanSquare++;
//     }
// }
// console.log(countSmallerThanSquare);
// բ) բոլոր տարրերի միջին թվաբանականի և տարրերի տարբերությունները,  

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let totalSum = numbers.reduce((sum, num) => sum + num, 0);
// let mean = totalSum / numbers.length;
// let differences = [];
// for (let i = 1; i < numbers.length; i++) {
//     differences.push(numbers[i] - numbers[i - 1]);
// }
// let differencesSum = differences.reduce((sum, diff) => sum + diff, 0);
// let meanOfDifferences = differences.length > 0 ? differencesSum / differences.length : 0;
// console.log(mean);
// console.log(meanOfDifferences);

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum = sum + numbers[i];

// }
// let mijin = sum / numbers.length;
// let diff = mijin - sum;
// console.log(diff)

// գ) այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից,  

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let countSmallerThanHalfNeighbors = 0;
// for (let i = 1; i < numbers.length - 1; i++) {
//     let left = numbers[i - 1];
//     let right = numbers[i + 1];
//     if (numbers[i] < (left + right) / 2) {
//         countSmallerThanHalfNeighbors++;
//     }
// }
// console.log(countSmallerThanHalfNeighbors);

// դ) մեծագույն տարրը և նրա կարգահամարը,  

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let largestElement = numbers[0];
// let largestIndex = 0;
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largestElement) {
//         largestElement = numbers[i];
//         largestIndex = i;
//     }
// }
// console.log(largestElement);
// console.log(largestIndex + 1);

// ե) մեծագույն և փոքրագույն տարրերի տարբերությունը,  

// let numbers = [1.5, 4.0, 2.2, 9.1, 0.3, 8.5];
// let largestElement = Math.max(...numbers);
// let smallestElement = Math.min(...numbers);
// let difference = largestElement - smallestElement;
// console.log(difference);

// զ) առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը,  

// է) մեծագույն և մեծությամբ երկրորդ տարրերը,  

// function findLargestAndSecondLargest(arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
//     for (let num of arr) {
//         if (num > largest) {
//             secondLargest = largest;
//             largest = num;
//         } else if (num > secondLargest && num < largest) {
//             secondLargest = num;
//         }
//     }
//     console.log(largest, secondLargest);
// }
// findLargestAndSecondLargest([3, 1, 4, 1, 5, 9, 2, 6]);
// ը) դրական տարրերից փոքրագույնի արժեքը (եթե դրական տարր չկա, արտածել համապատասխան հաղորդագրություն):

// function findSmallestPositive(arr) {
//     let smallestPositive = Infinity;
//     for (let num of arr) {
//         if (num > 0 && num < smallestPositive) {
//             smallestPositive = num;
//         }
//     }
//     if (smallestPositive === Infinity) {
//         console.log("No positive element found");
//     } else {
//         console.log(smallestPositive);
//     }
// }
// findSmallestPositive([-1, -2, 0, 3, 5, -4]);

// 2. Տրված է իրական թվերի հաջորդականություն: Արտածել YES, եթե 
//  ա) դրանում դրական տարրերի քանակը ավելի մեծ է բացասական տարրերի քանակից,  
// բ) այն սիմետրիկ հաջորդականություն է,  
//  գ) այն թվաբանական պրոգրեսիա է, 
//  դ) այն երկրաչափական պրոգրեսիա է:  
// Հակառակ դեպքում արտածել NO

// function checkPositiveNegative(arr) {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     for (let num of arr) {
//         if (num > 0) {
//             positiveCount++;
//         } else if (num < 0) {
//             negativeCount++;
//         }
//     }
//     if (positiveCount > negativeCount) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }
// checkPositiveNegative([-1, 2, 3, -4, 5, 6]);

// բ) այն սիմետրիկ հաջորդականություն է,  

// function isSymmetric(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             console.log("NO");
//             return;
//         }
//         left++;
//         right--;
//     }

//     console.log("YES");
// }
// isSymmetric([1, 2, 3, 2, 1]);

//  գ) այն թվաբանական պրոգրեսիա է, 

// function isProgression(arr) {
//     if (arr.length < 2) {
//         console.log("YES");
//         return;
//     }
//     let difference = arr[1] - arr[0];
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] - arr[i - 1] !== difference) {
//             console.log("NO");
//             return;
//         }
//     }
//     console.log("YES");
// }
// isProgression([2, 4, 6, 8]);

// function isGeometricProgression(arr) {
//     if (arr.length < 2) {
//         console.log("YES");
//         return;
//     }
//     let ratio = arr[1] / arr[0];
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i - 1] === 0 || arr[i] / arr[i - 1] !== ratio) {
//             console.log("NO");
//             return;
//         }
//     }
//     console.log("YES");
// }
// isGeometricProgression([2, 6, 18, 54]);




