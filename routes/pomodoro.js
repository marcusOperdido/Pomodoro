import express from "express";
//import mongoose from "mongoose";

const router = express.Router();
export default router;

router.get('/', function(req, res){
    res.send("oiii esse é meu pomodoro")
 })