const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./config/database');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cors());
app.use('/', authRouter);
app.use(cookieParser())
connectToDB()
module.exports = app;