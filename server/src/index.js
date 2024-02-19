const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send(
        await readFile('../public/index.html', 'utf8')
    );
});

app.listen(process.env.PORT || 3000, () => {
    console.log('App: http://localhost:3000/');
});