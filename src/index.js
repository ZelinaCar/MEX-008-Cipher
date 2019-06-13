
  let cifrar = () => {
    let cadena = document.getElementById('tarea').value; // texto a codificar
    let offset = parseInt(document.getElementById('offset').value);
    let textoModificado = cipher.cifrado(cadena, offset);

    console.log(textoModificado);
    //document.getElementById('resultado').innerHTML = textoModificado;
  }
document.getElementById('boton-cifrar').addEventListener('click',cifrar);

