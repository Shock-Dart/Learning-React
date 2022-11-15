//Strings
const nombre = 'Jose'
const apellido = 'Morales'

//const nombreCompleto = nombre + ' ' + apellido

const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo(parametro){
  return `Hola ${parametro}`;
}

console.log(`Este es un texto: ${getSaludo( nombreCompleto )}`)