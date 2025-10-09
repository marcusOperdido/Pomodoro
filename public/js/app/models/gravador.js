//grava quantos pomodoros foram executados

import mongoose from "mongoose";

const pomodoroSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true
  },
  date: {
    type: String, // ex: "2025-10-08"
    required: true
  },
  count: {
    type: Number,
    default: 0
  }
});

const Pomodoro = mongoose.model("Pomodoro", pomodoroSchema);
export default Pomodoro;
