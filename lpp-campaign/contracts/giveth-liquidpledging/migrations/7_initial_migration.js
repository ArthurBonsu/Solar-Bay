const LiquidPledgingPlugins = artifacts.require("LiquidPledgingPlugins");

module.exports = function(deployer) {
  deployer.deploy(LiquidPledgingPlugins);
};
