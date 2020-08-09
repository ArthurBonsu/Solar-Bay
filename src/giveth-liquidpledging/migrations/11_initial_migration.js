const PledgeAdmins = artifacts.require("PledgeAdmins");

module.exports = function(deployer) {
  deployer.deploy(PledgeAdmins);
};
