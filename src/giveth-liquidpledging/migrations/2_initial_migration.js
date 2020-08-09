const ILiquidPledgingPlugin = artifacts.require("ILiquidPledgingPlugin");

module.exports = function(deployer) {
  deployer.deploy(ILiquidPledgingPlugin);
};
