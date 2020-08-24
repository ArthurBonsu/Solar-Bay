const ILPVault = artifacts.require("ILPVault");

module.exports = function(deployer) {
  deployer.deploy(ILPVault);
};
