// requires
const fs = require('fs');
//
//
//
function listarTabla(base, limite = 10) {
    for (let i = 1; i <= limite; i++) {
        x = base * i;
        console.log(`${base} x ${i} = ${x}\n`);
    }

}
let crearArchivo = async(base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`${base} Is not a Number`);

    }
    if (!Number(limite)) {
        throw new Error(`${limite} Is not a Number`);

    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
        x = base * i;
        data += `${base} x ${i} = ${x}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) throw err;
        return console.log('The file has been saved!');
    });
};

module.exports = {
    crearArchivo,
    listarTabla
};