const express = require('express');

const bodyParser = require('body-parser');

const {PORT}= require('./config/server.config');``
const apiRouter = require('./routes');
const BaseError = require('./errors/base.error');
const errorhandlers = require('./utils/errorHandler');


const app = express() ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use('/api', apiRouter)

app.get("/ping", (req, res)=>
{
    return res.json({message : "server is running well "})
})

app.use(errorhandlers);

app.listen(PORT, () => {
    
    
    console.log(`server started at PORT : ${PORT}`)
   

} );

