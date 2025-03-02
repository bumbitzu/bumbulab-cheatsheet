const path = require('path');
const fs = require('fs').promises;
const {marked} = require('marked');


async function getMarkdownContent(filePath) {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return marked(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}
async function countFilesInFolder(folderPath) {
    try {
        const files = await fs.readdir(folderPath);
        return files.length;
    } catch (error) {
        console.error("Error reading folder:", error);
    }
}

//unused ======
async function createObject()
{
    const obj ={};
    const count = await countFilesInFolder(path.join(__dirname, "md/cpp"));
    for (let i = 0; i < count; i  ++) 
    {
        obj[`d${i}`] = await getMarkdownContent(path.join(__dirname, `md/cpp/${i}.md`));
    }
    return obj;
}
//============
async function createContent(language, id)
{
    let content = "";
    const count = await countFilesInFolder(path.join(__dirname, `md/${language}`));

    const mdContent = await getMarkdownContent(path.join(__dirname, `md/${language}/${id}.md`));
    const htmlStart = `<div class="tabcontent" id="${language}${id}"><div class="row padding-64"><div class="twothird container">`
    const htmlEnd = `</div></div></div><footer id="myFooter" class="theme-d3 padding-16">
            <a href="https://bumbulab.com" target="_blank"><img src="../../img/Logo.svg" width="20px">bumbulab.com</a>
        </footer>`;

    content +=  htmlStart + mdContent + htmlEnd;

    return content;
}
module.exports = createContent;