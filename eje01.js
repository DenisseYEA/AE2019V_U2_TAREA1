function LongestWord(sen){
    sen = sen.trim();// Elimina los espacios en blanco de ambos lados de una cadena
    sen = sen.replace(/[^̣a-zA-Z_áéíóúñ\sd]/g, ''); //Remplaza la expresión regular por ''
    var arr = sen.split(" ");//Convertir en array por cada espacio
    arr.sort(function(a, b){return b.length - a.length}); //Ordena matríz por longitud de mayor a menor.
    return arr[0];
}

var lw = LongestWord(" Hola&&!! mundo niña felíz ");

console.log(lw);
