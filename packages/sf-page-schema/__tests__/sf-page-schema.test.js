'use strict';

const sfPageSchema = require('..');
const assert = require('assert').strict;

assert.strictEqual(sfPageSchema(), 'Hello from sfPageSchema');
console.info("sfPageSchema tests passed");
