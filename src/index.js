const cifrar = () => {
  let cadena = document.getElementById('tarea').value;              //cadena a cifrar 
  let offset = parseInt(document.getElementById('offset').value);
  cadena = cadena.toUpperCase();
  let nuevaCadena = cipher.encode(offset, cadena);
  document.getElementById('resultado').value = nuevaCadena;         //valor de la cadena de texto
  // document.getElementById('resultado').innerHTML = nuevaCadena;  //para un parrafo
}
document.getElementById('boton-cifrar').addEventListener('click',cifrar);

const descifrar = () => {
  let cadena = document.getElementById('tarea').value;              //cadena a descifrar 
  cadena = cadena.toUpperCase();
  let offset = parseInt(document.getElementById('offset').value);
  let nuevaCadena = cipher.decode(offset, cadena);
  document.getElementById('resultado').value = nuevaCadena;         
}
document.getElementById('boton-descifrar').addEventListener('click',descifrar);

/* 
const mostrarOcultar = (idDiv) =>  {
  let aux = document.getElementById(idDiv).style;  
  aux.display = aux.display? "":"block";   
}
document.write("<style type = 'text/css'>div.box{ display: none; }</style>");
*/

/*
const esInteger = (e) => {
  let charCode = e.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
   return false;
  }
    return true;
  }
*/