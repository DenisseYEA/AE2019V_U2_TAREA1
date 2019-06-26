function CheckNums(num1, num2) {  
    if(num1 == num2){
        return "-1";
    } 
    return true ? num2 > num1 : false;
}
var cn = CheckNums(3,3);

console.log(cn);