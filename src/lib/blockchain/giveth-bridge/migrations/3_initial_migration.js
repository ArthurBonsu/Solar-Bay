const Vault = artifacts.require("./lib/Vault");

module.exports = function(deployer) {
  deployer.deploy(Vault);
};
