function SimpleSymbols(str) {  
    if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str) || /[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
        return false;
    }
    else {
     return true; 
    }
}

var ss = SimpleSymbols("d+=3=+s+");

console.log(ss);