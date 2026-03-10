const express = require('express');
const app = express();
const cors = require('cors');
const connectToDB = require('./config/database');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const movieRouter = require('./routes/movies.route');
const getUserRouter = require('./routes/getUser.route');
const getMovieRouter = require('./routes/getMovies.route');
const updateMovieRouter = require('./routes/updateMovie.route');
const movieDeleteRouter = require('./routes/movieDelete.route');
app.use(express.json());
app.use(cookieParser())
app.use(cors());
app.use('/', authRouter);
app.use('/', movieRouter);
app.use('/', getUserRouter);
app.use('/', getMovieRouter);
app.use('/', updateMovieRouter);
app.use('/', movieDeleteRouter)
connectToDB()
module.exports = app;