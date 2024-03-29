#!/usr/bin/env node
const os = require("os");

// Fix deprecation issue in newer node versions.
os.tmpDir = os.tmpdir;

const spritesheet = require("spritesheet-js");

spritesheet(
  "src/assets-src/**/*.png",
  {
    format: "json",
    name: "atlas",
    path: "src/assets",
    trim: true,
    powerOfTwo: true,
    square: false,
  },
  function (err) {
    if (err) throw err;

    console.log("atlas successfully generated");
  },
);

spritesheet(
  "src/assets-src/icons/**/*.png",
  {
    format: "json",
    name: "atlas-icons",
    path: "src/assets",
    trim: true,
    powerOfTwo: false,
    square: false,
  },
  function (err) {
    if (err) throw err;

    console.log("icons successfully generated");
  },
);
