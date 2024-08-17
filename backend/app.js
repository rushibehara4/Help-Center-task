const express = require("express");
const mongoose = require("mongoose");
const Card = require('./modals/cardDetails');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/HelpCenter";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err.message));

app.get("/ping", (req, res) => {
  res.send("Server is Running");
});

app.post("/cards", async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).send(card);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/cards/:title", async (req, res) => {
  try {
    const cards = await Card.find({
      title: { $regex: req.params.title, $options: 'i' }
    });
    if (!cards.length) {
      return res.status(404).json({ error: "No cards found" });
    }
    res.status(200).json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.error("Server startup error:", err);
  } else {
    console.log("Server is running on port 3000");
  }
});
