const LPPCampaignFactory = artifacts.require("LPPCampaignFactory");

module.exports = function(deployer) {
  deployer.deploy(LPPCampaignFactory);
};
