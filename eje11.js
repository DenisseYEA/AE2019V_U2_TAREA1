function KaprekarsConstant(num) { 
    var count = 0;
    while (true) {
        var num = evaluator(num);
        if (num === true) {
            return count;
        }
    }

    function evaluator(num) {
        count++
        var littleNum = parseInt(num.toString().split('').sort().join(''), 10);
        var bigNum = parseInt(num.toString().split('').sort().slice(0).reverse().join(''), 10);
        while (bigNum < 1000) {
            bigNum = bigNum * 10;
        }

        return bigNum - littleNum === 6174 ? true : bigNum - littleNum;
    }
}
var kc = KaprekarsConstant(9831);

console.log(kc);  