import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Book from "./models/book.model.js"; // Adjust path if needed

dotenv.config();
const URI = process.env.MongoDBURI;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    const data = JSON.parse(fs.readFileSync("books.json", "utf-8")); // Make sure books.json is in root or correct path
    await Book.insertMany(data);
    console.log("Books imported!");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Import failed:", err);
  });
