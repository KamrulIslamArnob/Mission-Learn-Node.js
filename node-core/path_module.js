// path module provides utilities for working with
// file and directory paths

/*

key methods:
1. path.join([...paths])
2. path.resolve([...paths])
3. path.basename(path[,ext])
4. path.dirname(path)
5. path.extname(path)
6. path.parse(path)
7. path.format(pathObject)
8. path.normalize(path)

*/


const path = require('path');
const filePath = path.join(__dirname,'example.txt');


module.exports = filePath;