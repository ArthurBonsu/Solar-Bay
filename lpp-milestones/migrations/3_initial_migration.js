const LPMilestone = artifacts.require("LPMilestone");

module.exports = function(deployer) {
  deployer.deploy(LPMilestone);
};
