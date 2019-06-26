function LetterCapitalize(str) {
    return str.trim().split(" ").map((valor)=>valor.charAt(0).toUpperCase()+valor.substring(1)).join(" ");
}
var lc = LetterCapitalize(" denisse yaneth espinosa abando ");

console.log(lc);  