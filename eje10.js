function AlphabetSoup(str) {
    return str.trim().split("").sort().join("");
}
var as = AlphabetSoup("coderbyte");

console.log(as);  