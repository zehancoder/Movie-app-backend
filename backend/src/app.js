const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./config/database');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const movieRouter = require('./routes/movies.route');
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/', authRouter);
app.use('/', movieRouter)
connectToDB()
module.exports = app;