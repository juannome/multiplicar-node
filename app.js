//
//
// desarrollo
// const { argv } = require('process');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo tabla del ${ argv.base } con base ${ argv.limite } se ha creado!`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

// let parametro = argv[2];
// let base = parametro.split('=')[1];