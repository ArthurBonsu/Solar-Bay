const ILiquidPledging = artifacts.require("ILiquidPledging");

module.exports = function(deployer) {
  deployer.deploy(ILiquidPledging);
};
