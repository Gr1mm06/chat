const mongoose = require('mongoose');

const HistorialScheme = new mongoose.Schema(
    {
        usuario: {
            type:String,
            required:true
        },
        mensaje:{
            type:String,
            required:true
        }
    },
    { 
        timestamps: true,
        versionKey:false
    }
)

module.exports = mongoose.model('historialChat',HistorialScheme);