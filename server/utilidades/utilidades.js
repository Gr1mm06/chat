const model = require('../models/historial');

const crearMensaje = (nombre , mensaje) => {

    
    insert(nombre , mensaje)
    return {
        nombre,
        mensaje,
        fecha: new Date().getTime()
    }
}

const insert = (nombre , mensaje,req, res)=> {
    var inputData= {usuario: nombre,mensaje: mensaje};
    model.create(inputData, (err,docs) => {
        console.log(inputData);
    });
}

module.exports = {
    crearMensaje
}