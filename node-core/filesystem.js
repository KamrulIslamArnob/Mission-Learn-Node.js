const fs = require("fs");
const path = require("path");


// basic readfile  function
const readFile1 = fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data);
  });


// read the content of a file
const readFile = (filePath) => {
  fs.readFile(path.join(__dirname, "example.txt"), "utf8", (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(data);
  });
};



// write to a file
const writeFile = (filePath, data) => {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log("File written successfully 🎉");
  });
};


// append to a file
const appendFile = (filePath, data) => {
fs.appendFile("text.txt", "areeh mama", (err) => {
    if (err) {
      console.log(err.message);
      return;
      console.log("File created");
    }
  })};



module.exports = { readFile, writeFile, appendFile };
