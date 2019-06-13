
  let cifrar = () => {
    let cadena = document.getElementById('tarea').value;              //cadena a cifrar 
    let offset = parseInt(document.getElementById('offset').value);
    let nuevaCadena = cipher.cifrado(cadena, offset);
    document.getElementById('resultado').value = nuevaCadena;         //valor de la cadena de texto
    // document.getElementById('resultado').innerHTML = nuevaCadena;  //para un parrafo
  }
document.getElementById('boton-cifrar').addEventListener('click',cifrar);