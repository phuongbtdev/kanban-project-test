// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/kanban", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Ticket = mongoose.model(
  "Ticket",
  new mongoose.Schema({
    title: String,
    description: String,
    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },
  })
);

app.get("/api/tickets", async (req, res) => {
  const tickets = await Ticket.find();
  res.send(tickets);
});

app.post("/api/tickets", async (req, res) => {
  const ticket = new Ticket(req.body);
  await ticket.save();
  res.send(ticket);
});

app.listen(5000, () => console.log("Server running on port 5000"));
