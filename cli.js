#!/usr/bin/env node

const shell = require("shelljs");
const argv = require('yargs')
    .option('template', {
        alias: 't',
        demand: false,
        default: 'javascript',
        describe: '模板',
        type: 'string'
    })
    .usage('Usage: create-react-p [options] [options]')
    .example('create-react-p my-app -t=typescript')
    .help('h')
    .alias('h', 'help')
    .alias('v', 'version')
    .epilog('@copyright renhongl 2022')
    .argv;

const template = argv.template === 'typescript' ? argv.template : 'javascript';

const name = process.argv[2] || 'my-app';

console.log('\x1b[36m%s\x1b[0m', "Welcome to use renhongl's create-react-p, it's a quite good tool for you to start react project.");


console.log('\x1b[33m%s\x1b[0m', 'name: ' + name);

console.log('\x1b[33m%s\x1b[0m', 'template: ' + template);

currPath = shell.pwd() + '/' + name;

if (template === 'javascript') {
    shell.exec('npx create-react-app ' + name);
} else {
    shell.exec('npx create-react-app ' + name + ' --template typescript');
}

shell.cd(name);

console.log('\x1b[33m%s\x1b[0m', 'Installing react-router, react-redux, sass');
shell.exec('npm install react-router-dom@6 react-redux @reduxjs/toolkit sass');

console.log('\x1b[33m%s\x1b[0m', 'Generate templates');

if (template === 'javascript') {
    shell.cp('-R', __dirname + '/templates/*', currPath + '/src/');
    shell.rm('-fr', currPath + '/src/App.js');
    shell.rm('-fr', currPath + '/src/index.css');
    shell.rm('-fr', currPath + '/src/App.css');
    shell.rm('-fr', currPath + '/src/App.test.js');
} else {
    shell.cp('-R', __dirname + '/templates-t/*', currPath + '/src/');
    shell.rm('-fr', currPath + '/src/App.tsx');
    shell.rm('-fr', currPath + '/src/index.css');
    shell.rm('-fr', currPath + '/src/App.css');
    shell.rm('-fr', currPath + '/src/App.test.tsx');
}


console.log('\x1b[33m%s\x1b[0m', 'Done for all');
console.log('\n');
console.log('\x1b[33m%s\x1b[0m', 'I suggest you type: ');
console.log('\n');
console.log('\x1b[36m%s\x1b[0m', '  cd ' + name);
console.log('\x1b[36m%s\x1b[0m', '  npm start');
console.log('\n');
console.log('\x1b[33m%s\x1b[0m', "Please add a star in github:");
console.log('\x1b[36m%s\x1b[0m', "https://github.com/renhongl/create-react-p");
console.log('\x1b[33m%s\x1b[0m', "if you like it :)");