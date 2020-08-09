const IForeignGivethBridge = artifacts.require("IForeignGivethBridge");

module.exports = function(deployer) {
  deployer.deploy(IForeignGivethBridge);
};
