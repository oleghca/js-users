

 let n = +prompt('Введите число:');
 console.log(`Вы ввели число: ${n}`);
 let isPrime = true;
 for(let i = 2; i <= (n - 1); i++){
     if(n % i == 0){
         isPrime = false;
        break;
     }
 }
  if(isPrime){
     console.log(`Is Prime ${n}`);
 }else{
     console.log(`Not Prime ${n}`);
 }

//////////////////////////////////////////////


for(let a = 3; a <= 1000; a++){
let isPrime = true;
for(let i = 2; i <= (a - 1); i++){
    if(a % i == 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(`Is Prime ${a}`);
 }
}