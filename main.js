// for(let a = 10; a >= 0; a--){
//     console.log(a);
    
// } 

const number = [0,56,31,27,42,75,98,21,0,29,66];

const juft = [];
const toq = [];

for(let index = 0; index < number.length; index++)
    if(number[index] % 2 === 0){
        juft.push(number[index]);
    } else {
    toq.push(number[index]);
    }

    console.log("Четные числа:", juft);
    console.log("Нечетные числа:", toq);
    