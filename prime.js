function checkPrime(num){
let count=0;
for (let i=i; i<=num; i++ ){
if (num%i){
count++;
}
if (count==2){
return true;
}
return false;
}

let ans= checkPrime(17)
if (ans==true){
console.log("Prime");

} else {
console.log("Not a Prime");
}