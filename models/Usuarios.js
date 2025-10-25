
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, // <-- corrigido
  },
  email: {
    type: String,
    required: true, // <-- corrigido
  },
  senha: {
    type: String,
    required: true, // <-- corrigido
  },
  eAdmin: {
    type: Number,
    default: 0 // 0 = usuário comum, 1 = admin
  }
});

// Aqui definimos explicitamente o nome da coleção como "usuarios"
const Usuario = mongoose.model("usuarios", usuarioSchema);

export default Usuario;


