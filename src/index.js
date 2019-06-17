

let cifrar = () => {
  let cadena = document.getElementById('tarea').value;              //cadena a cifrar 
  let offset = parseInt(document.getElementById('offset').value);
  let nuevaCadena = cipher.encode(cadena, offset);
  document.getElementById('resultado').value = nuevaCadena;         //valor de la cadena de texto
  // document.getElementById('resultado').innerHTML = nuevaCadena;  //para un parrafo
}
document.getElementById('boton-cifrar').addEventListener('click',cifrar);


let descifrar = () => {
  let cadena = document.getElementById('tarea').value;              //cadena a descifrar 
  let offset = parseInt(document.getElementById('offset').value);
  let nuevaCadena = cipher.decode(cadena, offset);
  document.getElementById('resultado').value = nuevaCadena;         //valor de la cadena de texto
  // document.getElementById('resultado').innerHTML = nuevaCadena;  //para un parrafo
}
document.getElementById('boton-descifrar').addEventListener('click',descifrar);