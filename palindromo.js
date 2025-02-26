function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('');

    if(invertido === texto){
        return true;
    }else{
        return false;
    }
}

console.log("¿Es un palindromo?" + palindromo("hola"));