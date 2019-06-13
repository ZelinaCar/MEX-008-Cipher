window.cipher = {

  cifrado: (string, offset) => {
    let positionAscii = string.charCodeAt();
            
        let newPositionAscii = ((positionAscii - 65 + offset) % 26 + 65);
        let newCharacter = String.fromCharCode(newPositionAscii);
      
    return newCharacter;
  
  }


};