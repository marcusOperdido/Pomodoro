import express from "express";
//import mongoose from "mongoose";

const router = express.Router();
export default router;

router.get('/', (req, res) => {
    res.send({ ok: true })
});
