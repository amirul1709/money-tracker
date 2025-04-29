import { Schema } from "mongoose";

const transactionSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    datetime: { type: Date, required: true }
});

const transactionModel = model("Transaction", transactionSchema);

export default transactionModel;