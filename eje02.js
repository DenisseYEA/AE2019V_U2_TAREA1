function FirstFactorial(num) {
    if(num == 0){
        return num = 1;
    }else{
        return num*FirstFactorial(num-1);
    }
}
var fact = FirstFactorial(8);

console.log(fact);     
 