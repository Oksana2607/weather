const socket = require('socket.io');
const express = require('express');
const bodyParser = require('body-parser');
const Model = require('./model');
const constants = require('../client/constants/constants');

const app = express();

app.use(express.static('dist'));

const server = app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

const io = socket(server);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.static('public'));
app.use(express.json());

const model = new Model();
model.initialize();

io.sockets.on('connection', async socket => {
  io.sockets.emit(constants.MODEL, model);
});

const jsonParser = bodyParser.json();

app.post('/login', jsonParser, async (request, res) => {
  try {
    const { name, color } = request.body;
    console.log(request.body);
    const player = await model.createPlayer(name, color);
    res.status(200).send(player);
    io.sockets.emit(constants.SAVE_PLAYER, player);
  } catch (e) {
    res.status(409).send(e.message);
  }

});
