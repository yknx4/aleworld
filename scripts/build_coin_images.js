#!/usr/bin/env node
const {readdirSync: readDir} = require('fs');
const {rm, exec} = require('shelljs');
const {last, each} = require('lodash');

const {log} = console;

const prefix = '../src/client/assets/images/coins';
const output = '../src/client/assets/images/coins';

const files = readDir('../src/client/assets/images/coins').filter((f) => last(f.split('.')) === 'svg');

log('Exporting image files to 14px png.');
each(files, (image) => {
  log(`Exporting ${image}`);
  const name = image.split('.svg')[0];
  exec(`node ../node_modules/.bin/svgexport ${prefix}/${image} ${output}/${name}-14.png 14:`);
});
