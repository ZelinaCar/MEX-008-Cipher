
  let cifrar = () => {
    let cadena = document.getElementById('tarea').value; // texto a codificar
    let offset = parseInt(document.getElementById('offset').value);
    let nuevaCadena = cipher.cifrado(cadena, offset);
    document.getElementById('resultado').value = nuevaCadena;
  }
document.getElementById('boton-cifrar').addEventListener('click',cifrar);