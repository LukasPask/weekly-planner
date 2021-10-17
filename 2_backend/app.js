// Imports
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import colors from 'colors';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
// Importing models
import User from './Models/UserModel.js';
import Task from './Models/TaskModel.js';
// Middlewares
app.use(cors());
app.use(express.json());

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`.blue.underline.bold);
    // Starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}...`.yellow.underline.bold)
    );
  });

//   Routes
