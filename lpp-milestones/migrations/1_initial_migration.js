const BridgedMilestone = artifacts.require("BridgedMilestone");

module.exports = function(deployer) {
  deployer.deploy(BridgedMilestone);
};
