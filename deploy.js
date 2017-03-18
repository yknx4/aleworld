#!/usr/bin/env node
const {rm, cp, exec} = require('shelljs');
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  { name: 'branch', alias: 'b', type: String, defaultValue: 'master' },
];
const {log} = console;

const options = commandLineArgs(optionDefinitions);

const today = new Date().toISOString().slice(0, 10);

const currentBranch = require('git-branch').sync();
const deployBranch = options.branch;

if (currentBranch !== deployBranch) {
  console.log(`The branch to deploy must be '${deployBranch}', you are currently on '${currentBranch}'.`);
  process.exit();
}

log('Deploying...');
log('Building production files...');
exec('yarn build');
log('Copying production files...');
rm('-rf', 'docs');
cp('-R', 'build/client', 'docs');
log('Creating git commit');
exec('git reset .');
exec('git add docs');
exec(`git commit -m "Client Deploy ${today}"`);
