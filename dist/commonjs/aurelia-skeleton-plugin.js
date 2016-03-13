'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloWorld = exports.HelloWorld = function HelloWorld() {
  _classCallCheck(this, HelloWorld);
};

function configure(config) {
  config.globalResources('./hello-world');
}

exports.configure = configure;
exports.HelloWorld = HelloWorld;