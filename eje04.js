function LetterChanges(str) {
    return str.trim().toLowerCase().replace(/([zdhnt])|[a-z]/g, (m, toCapital) =>
        String.fromCharCode(((m.charCodeAt(0) - 18) % 26) + (toCapital ? 65 : 97))
    );

}

var lc = LetterChanges("Holi Zuri");

console.log(lc);   