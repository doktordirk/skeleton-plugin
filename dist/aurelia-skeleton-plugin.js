
export class HelloWorld {}

function configure(config) {
  config.globalResources('./hello-world');
}

export {
  configure,
  HelloWorld
};
