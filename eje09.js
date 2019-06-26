function TimeConvert(num) {  
    return Math.floor(num/60)+":"+num%60; 
}
var tc = TimeConvert(126);

console.log(tc);