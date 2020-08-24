const LiquidPledgingMock = artifacts.require("LiquidPledgingMock");

module.exports = function(deployer) {
  deployer.deploy(LiquidPledgingMock);
};
