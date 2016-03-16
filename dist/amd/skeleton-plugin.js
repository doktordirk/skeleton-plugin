define(['exports', './hello-world'], function (exports, _helloWorld) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HelloWorld = exports.configure = undefined;


  function configure(config) {
    config.globalResources('./hello-world');
  }

  exports.configure = configure;
  exports.HelloWorld = _helloWorld.HelloWorld;
});