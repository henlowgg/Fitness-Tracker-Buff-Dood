const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// change back to populate if necessary
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});