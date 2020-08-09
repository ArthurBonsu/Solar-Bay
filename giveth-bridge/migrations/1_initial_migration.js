const ForeignGivethBridge = artifacts.require("ForeignGivethBridge");

module.exports = function(deployer) {
  deployer.deploy(ForeignGivethBridge);
};
