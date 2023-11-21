const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/index');

require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECT_STRING);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use('/api', apiRoutes);

const port = process.env.PORT
app.listen(port, () => console.log(`Server running on port ${port}`));
