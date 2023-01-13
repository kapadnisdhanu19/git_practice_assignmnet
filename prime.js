// check whether a number is prime or not

let count=0;
let num=8;
for(let i=2; i<=num/2; i++){
if(i%num==0){
count++;
}
}
if(count==0){
console.log("prime number");
}
else{
console.log("not prime number");
}