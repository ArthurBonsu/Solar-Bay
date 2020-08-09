const LPPCappedMilestoneFactory = artifacts.require("LPPCappedMilestoneFactory");

module.exports = function(deployer) {
  deployer.deploy(LPPCappedMilestoneFactory);
};
