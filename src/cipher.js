window.cipher = {

  cifrado: (string, offset) => {
    
    let nuevaCadena = "";
    
    for (let i = 0; i < string.length; i++) {
          let positionAscii = string.charCodeAt(i);
          let newPositionAscii = ((positionAscii - 65 + offset) % 26 + 65);
          let newCharacter = String.fromCharCode(newPositionAscii);
          nuevaCadena = nuevaCadena.concat(newCharacter); 
      }
    return nuevaCadena;
    }

};