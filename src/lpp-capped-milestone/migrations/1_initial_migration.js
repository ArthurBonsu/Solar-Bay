const LPPCappedMilestone = artifacts.require("LPPCappedMilestone");

module.exports = function(deployer) {
  deployer.deploy(LPPCappedMilestone);
};
