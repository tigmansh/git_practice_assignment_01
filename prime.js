function checkPrime(num){

let factor=0;
for (let i=1; i<=num; i++ ){
if (num%i==0){
factor++;
}
}
if (factor==2){
return true;
} else{
return false;
}
}

let ans= checkPrime(12)
if (ans==true){
console.log("Prime");
} else {
console.log("Not a Prime");
}
