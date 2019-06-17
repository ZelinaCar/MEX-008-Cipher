window.cipher = {

  encode: (string, offset) => {
    
    string = string.toUpperCase();
    let nuevaCadena = "";
    // let nuevaCadena =  [];
    for (let i = 0; i < string.length; i++) {
         let positionAscii = string.charCodeAt(i);
         let newPositionAscii = ((positionAscii - 65 + offset) % 26 + 65);
         let newCharacter = String.fromCharCode(newPositionAscii);
         nuevaCadena = nuevaCadena.concat(newCharacter); 
         // nuevaCadena.push(newCharacter); //devuelve el array separado por comas
    }
  return nuevaCadena;
  },

  decode: (string, offset) => {
    //string = string.toUpperCase();
    let nuevaCadena = "";
    for (let i = 0; i < string.lenght; i++) {
         let positionAscii = string.charCodeAt(i);
         let newPositionAscii = ((positionAscii + 65 - offset) % 26 + 65);
         let newCharacter = String.fromCharCode(newPositionAscii);
         nuevaCadena = nuevaCadena.concat(newCharacter); 
    }
  return nuevaCadena;
  }

};