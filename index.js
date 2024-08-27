// import express from 'express';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

// const app = express();
import app from './app.js';
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/', (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


