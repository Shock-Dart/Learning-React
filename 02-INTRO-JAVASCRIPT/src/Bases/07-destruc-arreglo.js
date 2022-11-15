//Desestructuracion Arreglos

const personajes = ['Goku', 'Vegetta', 'Trunks']

console.log(personajes[0])

const [ ,,p3 ] = personajes;

console.log(p3)

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [ letras, numeros] = retornaArreglo();

console.log(letras, numeros)

//Tarea

const funcionState = (valor) => {
  return [valor, ()=>console.log('Hola Mundo')]
}

const [nombre, setNombre] = funcionState('Goku');

console.log(nombre)
setNombre()