const FailClosedVault = artifacts.require("../lib/FailClosedVault");

module.exports = function(deployer) {
  deployer.deploy(FailClosedVault);
};

//29524947,
//33112389300
//1000000000