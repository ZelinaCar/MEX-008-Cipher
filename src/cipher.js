window.cipher = {

  encode: (offset, string) => {
    let nuevaCadena = "";
    // let nuevaCadena =  [];
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
      if (positionAscii === 32) { // si se trata de un espacio vacío, lo concatena tal cual
            nuevaCadena = nuevaCadena + ' ';
      } 
      else {
        let newPositionAscii = ((positionAscii - 65 + offset) % 26 + 65);
        let newCharacter = String.fromCharCode(newPositionAscii);
        nuevaCadena = nuevaCadena.concat(newCharacter);   
      }
      // nuevaCadena.push(newCharacter); //devuelve el array separado por comas
    }
  return nuevaCadena;
  },

  decode: (offset, string) => {
    let nuevaCadena = "";
    for (let i = 0; i < string.length; i++) {
      let positionAscii = string.charCodeAt(i);
      if (positionAscii === 32) {
        nuevaCadena = nuevaCadena + ' ';
      } 
      else {
         let newPositionAscii = ((positionAscii + 65 - offset) % 26 + 65);
         let newCharacter = String.fromCharCode(newPositionAscii);
         nuevaCadena = nuevaCadena.concat(newCharacter); 
      }
    }
  return nuevaCadena;
  }
};