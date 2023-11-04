const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs')

console.clear()

console.log(argv)



crearArchivo(argv.b, argv.l, argv.h)

  .then(nombreArchivo => console.log(nombreArchivo.america, 'creado'))
   .catch(err => console.log(err))


//con writefile

// fs.writeFile( `tabla-${base}.txt`, salida, (err) =>{
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creada`)
// })

// con writeFileSync que es más corto pero el error se hace con try






