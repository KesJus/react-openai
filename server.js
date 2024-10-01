const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const fs = require("fs");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

let filePath;

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
      // return res.status(500).json({ error: "Įkėlimo klaida", details: err });
    }
    filePath = req.file.path; // Failo kelias
    console.log(`Failas įkeltas: ${filePath}`);
    // res.status(200).json({ message: "Failas sėkmingai įkeltas", filePath });
  });
});

// app.post('/openai', (req, res) => {
//   const prompt = req.body.message;
//   console.log(`Gautas klausimas: ${prompt}`);
//   // Čia pridėkite logiką darbui su OpenAI ar kitu servisu.
//   res.status(200).json({ message: `Gautas pranešimas: ${prompt}` });
// });

app.listen(PORT, () => console.log(`Serveris veikia ant porto ${PORT}`));
