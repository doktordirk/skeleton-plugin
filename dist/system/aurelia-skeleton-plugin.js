'use strict';

System.register([], function (_export, _context) {
  var HelloWorld;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function configure(config) {
    config.globalResources('./hello-world');
  }

  return {
    setters: [],
    execute: function () {
      _export('HelloWorld', _export('HelloWorld', HelloWorld = function HelloWorld() {
        _classCallCheck(this, HelloWorld);
      }));

      _export('HelloWorld', HelloWorld);

      _export('configure', configure);

      _export('HelloWorld', HelloWorld);
    }
  };
});