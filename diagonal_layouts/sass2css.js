const sass = require('sass');
const path = require('path');
const fs = require('fs');


const source = path.resolve(__dirname, 'style.scss');
const dist =  path.resolve(__dirname, 'style.css');
const result = sass.compile(source);
fs.writeFileSync(dist, result.css);