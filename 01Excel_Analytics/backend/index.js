const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
