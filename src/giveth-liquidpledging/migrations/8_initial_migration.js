const LiquidPledgingStorage = artifacts.require("LiquidPledgingStorage");

module.exports = function(deployer) {
  deployer.deploy(LiquidPledgingStorage);
};
