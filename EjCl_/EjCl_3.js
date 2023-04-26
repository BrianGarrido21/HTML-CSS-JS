function esPalindromo(cadena) {
    cadena = cadena.toLowerCase();
    var cadena1 = cadena.split("").reverse().join("");
    if (cadena==cadena1){
        document.write("Es palindromo")
    }else
    document.write("No es palindromo")
  }