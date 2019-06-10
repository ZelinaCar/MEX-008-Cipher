const getName = document.getElementById('get-name');
const boxPrint = document.getElementById('saludo');
  const printName  = () => {
    boxPrint.innerHTML = 'Hola' + ' ' + getName.value;
  }
  
  getName.addEventListener('keyup', printName)
  