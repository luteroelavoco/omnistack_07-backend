const express = require('express')
const mongoose = require ('mongoose')
// Crie um ficheiro chamado password
const credentials = require('./password')


const app = express();

const user = credentials.user;
const password = credentials.pass;

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.zt5sd.mongodb.net/test?retryWrites=true&w=majority`,{
    useNewUrlParser: true
})


app.use(require('./routes'))

app.listen(3333)