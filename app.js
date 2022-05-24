const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const connectDB = require('./connection/connect');
const postRouter = require('./routes/postRoute');

connectDB();

const PORT = process.env.PORT || 3004;

app.use(cors());
app.use(express.json());

const photo = path.join(__dirname, 'uploads/images');
app.use(express.static(photo));

app.use('/api', postRouter);

app.listen(PORT, () => {
  console.log('Server is running at 3004');
});
