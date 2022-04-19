#!/usr/bin/env node

let name = process.argv[2];
const shell = require("shelljs");

if (!name) {
    name = 'my-app';
}

shell.exec("echo Welcome to use renhongl's create-react-p, it's a quite good tool for you to start react project.");
shell.exec("echo Please add a star on github: https://github.com/renhongl if you like it!");

currPath = shell.pwd() + '/' + name;

shell.exec('npx create-react-app ' + name);

shell.cd(name);

// Installing react router, react-redux
shell.exec('echo Installing react-router, react-redux');
shell.exec('npm install react-router-dom@6 react-redux @reduxjs/toolkit');

// Generate templates
shell.exec('echo Generate templates');
shell.cp('-R', __dirname + '/templates/*', currPath + '/src/');

shell.exec('echo Done for all');
shell.exec('echo I suggest you type: ');
shell.exec('echo cd ' + name);
shell.exec('echo npm start');