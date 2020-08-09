const LPFactory = artifacts.require("LPFactory");

module.exports = function(deployer) {
  deployer.deploy(LPFactory);
};
