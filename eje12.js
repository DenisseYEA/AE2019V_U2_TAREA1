function ChessboardTraveling(str) {
    regEx = /([1-8\s1-8])([1-8\s1-8])/g

    if (regEx.test(str)) {
        var horShift = parseInt(str.charAt(8), 10) - parseInt(str.charAt(3), 10);
        var vertShift = parseInt(str.charAt(6), 10) - parseInt(str.charAt(1), 10);
        return factorial(horShift + vertShift) / (factorial(vertShift) * factorial(horShift));
    } else {
        return 'error'
    }
}

function factorial(num) {
    return num === 0 ? 1 : num * factorial(num - 1);
}

var ct = ChessboardTraveling("(1 1)(3 3)");
console.log(ct);    