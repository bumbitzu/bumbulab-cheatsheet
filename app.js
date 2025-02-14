// Importă modulele necesare
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const createContent = require('./tools');


// Setăm EJS ca motor de vizualizare
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public_html')));

app.get('/cheatsheet', (req, res) => {
    res.render('index');
});

app.get('/cheatsheet/cpp',async (req, res) => {

    const content = await createContent("cpp");
    res.render('cpp/index', {content: content});

});

app.get('/cheatsheet/css/',async (req, res) => {
    
    const content = await createContent("css");
    res.render('css/index', {content: content});

});

app.get('/cheatsheet/python/',async (req, res) => {
    
    const content = await createContent("py");
    res.render('python/index', {content: content});

});
// Pornim serverul
app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});
