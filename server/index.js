const express = require('express');
const cors =  require('cors');
const morgan = require('morgan');
const messages = require('./db/messages')

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('', (req, res) => {
	res.json({
		message: 'full stack message-board'
	})
});

app.get('/messages', (req, res) => {
	messages.getAll().then((messages) => {
		res.json(messages);
	})
});

app.post('/messages', (req, res) => {
  console.log(req.bod);
  messages.create(req.body).then((message) => {
  	res.json(message)
  }).catch((error) => {
  	res.status(500);
  	res.json(error);
  }) 
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
	console.log(`listening on ${port}`)
});