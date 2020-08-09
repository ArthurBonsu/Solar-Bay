const FailClosedVault = artifacts.require("./lib/FailClosedVault");

module.exports = function(deployer) {
  deployer.deploy(FailClosedVault);
};
