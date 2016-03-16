'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorld = exports.configure = undefined;

var _helloWorld = require('./hello-world');

function configure(config) {
  config.globalResources('./hello-world');
}

exports.configure = configure;
exports.HelloWorld = _helloWorld.HelloWorld;