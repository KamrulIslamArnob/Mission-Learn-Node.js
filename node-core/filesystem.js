const fs = require('fs');
const path = require('path');

// read the content of a file
const readFile = (filePath)=>{
    fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data);
    });
}

// write to a file
const writeFile = (filePath, data)=>{
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        
        console.log('File written successfully 🎉');
    });
}

module.exports = { readFile, writeFile };
