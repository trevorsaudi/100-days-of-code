const express  = require('express')
const app = express(); //creating the web application through express
app.listen(3000, () => console.log('listening at 3000...'))
app.use(express.static('public')); //hosting static files  

app.post('/api' , (request, response) =>{console.log(request)});