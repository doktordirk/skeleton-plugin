import {HelloWorld} from './hello-world';

function configure(config) {
  config.globalResources('./hello-world');
}

export {
  configure,
  HelloWorld
};
