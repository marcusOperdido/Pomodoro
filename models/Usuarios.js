import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, 
  },
  email: {
    type: String,
    required: true, 
  },
  senha: {
    type: String,
    required: true,
  },
  eAdmin: {
    type: Number,
    default: 0 // 0 = usuário comum, 1 = admin
  },
  contador:[{
  dia:{ type:Date, required:true},
  valor: {type:Number, required: true}
  }]

});

// Aqui definimos explicitamente o nome da coleção como "usuarios"
const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario;


