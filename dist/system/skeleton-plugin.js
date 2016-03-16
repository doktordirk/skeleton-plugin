'use strict';

System.register(['./hello-world'], function (_export, _context) {
  var HelloWorld;


  function configure(config) {
    config.globalResources('./hello-world');
  }

  return {
    setters: [function (_helloWorld) {
      HelloWorld = _helloWorld.HelloWorld;
    }],
    execute: function () {
      _export('configure', configure);

      _export('HelloWorld', HelloWorld);
    }
  };
});