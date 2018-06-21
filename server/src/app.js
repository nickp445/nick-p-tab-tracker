const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
	res.send({
		message: "Hello"
	})
});

app.listen(process.env.port || 4444, () => {
	console.log('Listening on port 4444')
});