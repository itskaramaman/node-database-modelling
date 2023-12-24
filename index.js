import express from "express";

const app = express();

app.get("/", (req, res) => res.send(`<h1>Server running on 5000</h1>`));

app.listen(5000, () => console.log("Server on 5000"));
