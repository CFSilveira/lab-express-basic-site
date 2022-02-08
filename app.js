const express = require('express');

const app = express();

// Url  - /about /profile /contatcs /history
//method - GET / POST ...

//Making the public folder the default one for static files
app.use(express.static('public'));

//Routes

app.get('/', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/about.html');
});

app.get('/works', (request, response, next) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/public/views/works.html');
});


app.listen(3000, () => console.log('Server running on port 3000!'));

