const GivethBridgeMock = artifacts.require("GivethBridgeMock");

module.exports = function(deployer) {
  deployer.deploy(GivethBridgeMock);
};
