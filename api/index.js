import express from "express"

const app = express();

app.get("/api/test", (req, res) => {
    res.json("test ok");
});

app.post("api/transaction", (req, res) => {
    res.json(req.body);
});

app.listen(3000);