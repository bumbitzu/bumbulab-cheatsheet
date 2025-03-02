// Importă modulele necesare
const express = require('express');
const app = express();
const path = require('path');
const createContent = require('./tools');

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Setăm EJS ca motor de vizualizare
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public_html')));

app.get('/cheatsheet', (req, res) => {
    res.render('index');
});


//---cpp
app.get('/cheatsheet/cpp',async (req, res) => {

    const content = await createContent("cpp", '0');
    res.render('cpp/index', {content: content});

});
app.post('/cheatsheet/cpp/load', async (req, res) => {
    const { id } = req.body;

    try {
        const content = await createContent("cpp", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Eroare la încărcarea conținutului:", error);
        res.json({ success: false, content: "<p>Eroare la încărcare.</p>" });
    }
});

//---sss
app.get('/cheatsheet/css',async (req, res) => {
    
    const content = await createContent("css", '0');;
    res.render('css/index', {content: content});

});
app.post('/cheatsheet/css/load', async (req, res) => {

    const { id } = req.body;
    try {
        const content = await createContent("css", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Error loading content:", error);
        res.json({ success: false, content: "<p>Error loading content.</p>" });
    }
});

//---python
app.get('/cheatsheet/python',async (req, res) => {
    
    const content = await createContent("py", '0');;
    res.render('python/index', {content: content});

});
app.post('/cheatsheet/py/load', async (req, res) => {

    const { id } = req.body;
    try {
        const content = await createContent("py", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Error loading content:", error);
        res.json({ success: false, content: "<p>Error loading content.</p>" });
    }
});

app.get('/cheatsheet/chatgpt', async (req, res) => {
    const content = await createContent("chatgpt", '0');
    res.render('chatgpt/index', {content: content});

});
app.post('/cheatsheet/chatgpt/load', async (req, res) => {

    const { id } = req.body;
    try {
        const content = await createContent("chatgpt", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Error loading content:", error);
        res.json({ success: false, content: "<p>Error loading content.</p>" });
    }
});
//express
app.get('/cheatsheet/express', async (req, res) => {
    const content = await createContent("express", '0');
    res.render('express/index', {content: content});

});
app.post('/cheatsheet/express/load', async (req, res) => {

    const { id } = req.body;
    try {
        const content = await createContent("express", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Error loading content:", error);
        res.json({ success: false, content: "<p>Error loading content.</p>" });
    }
});
//html
app.get('/cheatsheet/html', async (req, res) => {
    const content = await createContent("html", '0');
    res.render('html/index', {content: content});

});
app.post('/cheatsheet/html/load', async (req, res) => {

    const { id } = req.body;
    try {
        const content = await createContent("html", id);
        res.json({ success: true, content: content }); // Adaugă success: true
    } catch (error) {
        console.error("Error loading content:", error);
        res.json({ success: false, content: "<p>Error loading content.</p>" });
    }
});
// Pornim serverul
app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});
