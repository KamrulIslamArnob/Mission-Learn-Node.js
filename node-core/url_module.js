// the url module allows for parsing and formatting URL strings 

// it is useful for working with web addresses and URLs 

// key methods:
// 1. url.parse(urlString[,parseQueryString[,slashesDenoteHost]])
// 2. url.format(urlObject)
// 3. url.resolve(from,to)


const url = require('url');
const myUrl = new URL('https://bcrypt.website');



module.exports = myUrl;