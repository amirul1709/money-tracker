import express from "express";
import cors from "cors";
import TransactionModel from "./models/transactions.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/test", (req, res) => {
    res.json("test ok");
});

app.post("/api/transaction", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const { name, price, datetime, description } = req.body;
    const transaction = await TransactionModel.create({
        name,
        price,
        datetime,
        description,
    })
    res.json(transaction);
});

app.get("/api/transactions", async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await TransactionModel.find();
    res.json(transactions);
})

app.listen(3000);