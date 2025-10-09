
//Criação de arquivos DB para login
    //MongoDB

import mongoose from 'mongoose';



const usuarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        requere: true,
        },
        email:{
        type: String,
        requere: true,
        },
        senha:{
        type: String,
        requere: true,
        },
        eAdmin:{
            type: Number,
            default:0 //ele ja entra 0 aertando que nao é admin
        }
})

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;




