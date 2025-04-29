import express from "express";
import cors from "cors";
import transactionModel from "./models/transactions";
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json("test ok");
});

app.post("api/transaction", (req, res) => {
    mongoose.connect("");
    const { name, description, datetime } = req.body;
    res.json(req.body);
});

app.listen(3000);