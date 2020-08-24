const IKernelEnhanced = artifacts.require(".\lib\aragon\IKernelEnhanced");

module.exports = function(deployer) {
  deployer.deploy(IKernelEnhanced);
};
