// Importă modulele necesare
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs').promises;
const path = require('path');
const createObject = require('./tools');
const createContent = require('./tools');


// Setăm EJS ca motor de vizualizare
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public_html')));

app.get('/cheatsheet', (req, res) => {
    res.render('index');
});

app.get('/cheatsheet/cpp',async (req, res) => {

   //const cppObj = await createObject();
    const content = await createContent("cpp");
    res.render('cpp/index', {content: content});

});
// Pornim serverul
app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});
