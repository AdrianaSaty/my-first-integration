const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var morgan = require('morgan')
const cors = require('cors');
const apiRoutes = require('./routes/api-routes.js')

const app = express();

mongoose.connect('mongodb://localhost/my-first-api', { useNewUrlParser: true })
    .then(() => console.log('connected to mongo databese!') );


app.use(bodyParser.urlencoded({ extended: true })); // se coloca como true, o bodyparses aceita dentro do obj qualquer tipo de dado, se for falso, aceita so string e array

app.use(bodyParser.json({ limit: '10mb' }));

app.use(morgan('dev'));

//o cors, por seguranca, bloqueia qualquer request, que uma api receber 
//via browser pedindo algum dado. Só as que estao listadas nao serao bloqueadas
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
})); 

app.use('/api', apiRoutes);

app.listen(5000, () => console.log('server on 5000') );

module.exports = app;
