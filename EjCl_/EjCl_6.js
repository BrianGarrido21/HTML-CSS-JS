function traducirNumero(num) {
    var traduccion = "";
  
    switch (num) {
      case 1:
        traduccion = "one";
        break;
      case 2:
        traduccion = "two";
        break;
      case 3:
        traduccion = "three";
        break;
      case 4:
        traduccion = "four";
        break;
      case 5:
        traduccion = "five";
        break;
      case 6:
        traduccion = "six";
        break;
      case 7:
        traduccion = "seven";
        break;
      case 8:
        traduccion = "eight";
        break;
      case 9:
        traduccion = "nine";
        break;
      case 10:
        traduccion = "ten";
        break;
      default:
        traduccion = "El numero debe estar entre 1 y 10";
    }
    document.write(traduccion);
  }
  
 