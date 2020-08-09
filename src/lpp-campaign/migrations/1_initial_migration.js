const LPPCampaign = artifacts.require("LPPCampaign");

module.exports = function(deployer) {
  deployer.deploy(LPPCampaign);
};
