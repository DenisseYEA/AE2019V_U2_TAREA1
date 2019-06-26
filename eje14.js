function PentagonalNumber(num) {
    return num === 1 ? 1 : PentagonalNumber(num - 1) + (5 * (num - 1));
}
var pn = PentagonalNumber(5);
console.log(pn);      