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
async function createContent(language)
{
    let content = "";
    const count = await countFilesInFolder(path.join(__dirname, `md/${language}`));
    for (let i = 0; i < count; i  ++) 
    {
        const mdContent = await getMarkdownContent(path.join(__dirname, `md/${language}/${i}.md`));
        const htmlStart = `<div class="tabcontent" id="${language}${i}"><div class="row padding-64"><div class="twothird container">`
        const htmlEnd = `</div></div></div>`;

        content +=  htmlStart + mdContent + htmlEnd;
    }
    return content;
}
module.exports = createContent;