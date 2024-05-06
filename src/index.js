#!/usr/bin/env node

const { program } = require('commander');
const fs = require('fs');
const path = require('path');

program
  .version('1.0.0')
  .description('A simple CLI tool for creating and managing files and directories.');

program
  .command('create-file <filename>')
  .description('Create a new file')
  .action((filename) => {
    fs.writeFile(filename, '', (err) => {
      if (err) {
        console.error('Error creating file:', err);
      } else {
        console.log(`File "${filename}" created successfully.`);
      }
    });
  });

program
  .command('create-directory <dirname>')
  .description('Create a new directory')
  .action((dirname) => {
    fs.mkdir(dirname, { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating directory:', err);
      } else {
        console.log(`Directory "${dirname}" created successfully.`);
      }
    });
  });

program
  .command('list')
  .description('List all files and directories in the current directory')
  .action(() => {
    fs.readdir(process.cwd(), (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
      } else {
        console.log('Files and directories in the current directory:');
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
  });

program.parse(process.argv);
