const express = require('express');
const App = express();
const port = 5000;
const route = require('./routes/model');
const connectToDB = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');

connectToDB();
App.use(cors());

// Parse application/json
App.use(bodyParser.json());
// Parse application/json
App.use(bodyParser.urlencoded({ extended: false }));
App.use(express.json());

App.use('/api', route);

App.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})
