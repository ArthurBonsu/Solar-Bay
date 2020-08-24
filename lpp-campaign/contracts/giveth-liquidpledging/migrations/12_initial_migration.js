const Pledges = artifacts.require("Pledges");

module.exports = function(deployer) {
  deployer.deploy(Pledges);
};
