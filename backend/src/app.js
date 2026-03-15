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
const getMeRouter = require('./routes/getme.route');
const deleteUserRouter = require('./routes/deleteUser.route');

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true
  })
);
app.use('/', authRouter);
app.use('/', movieRouter);
app.use('/', getUserRouter);
app.use('/', getMovieRouter);
app.use('/', updateMovieRouter);
app.use('/', movieDeleteRouter);
app.use('/', getMeRouter);
app.use('/', deleteUserRouter)
connectToDB()
module.exports = app;