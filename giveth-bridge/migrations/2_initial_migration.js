const GivethBridge = artifacts.require("GivethBridge");

module.exports = function(deployer) {
  deployer.deploy(GivethBridge);
};
