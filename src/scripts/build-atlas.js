#!/usr/bin/env node

var spritesheet = require('spritesheet-js');

spritesheet('src/assets-src/**/*.png', {
  format: 'json',
  name: 'atlas',
  path: 'src/assets',
  trim: true,
}, function (err) {
  if (err) throw err;

  console.log('spritesheet successfully generated');
});
