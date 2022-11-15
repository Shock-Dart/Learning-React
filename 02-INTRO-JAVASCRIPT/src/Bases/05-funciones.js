//Funciones
const saludar = function (nombre){
  return `Hola ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`

console.log(saludar('Jose Andres 1 '))

console.log(saludar2('Jose Andres 2 '))

console.log(saludar3('Jose Andres 3 '))

const getUser = () => ({
    uid : 'ABC123',
    username : 'NOMBRE USUARIO'
})

const user = getUser()

console.log(user)

//TAREA

const getUsuarioActivo = (nombre) => 
   ({
    uid: '123456',
    username: nombre
  });

const usuarioActivo = getUsuarioActivo('Andres')

const usuarioActivo2 = getUsuarioActivo('Pedro')

console.log(usuarioActivo)
console.log(usuarioActivo2)