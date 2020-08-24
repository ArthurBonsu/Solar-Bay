const LPConstants = artifacts.require("LPConstants");

module.exports = function(deployer) {
  deployer.deploy(LPConstants);
};
