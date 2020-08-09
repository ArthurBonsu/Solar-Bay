const CappedMilestone = artifacts.require("CappedMilestone");

module.exports = function(deployer) {
  deployer.deploy(CappedMilestone);
};
