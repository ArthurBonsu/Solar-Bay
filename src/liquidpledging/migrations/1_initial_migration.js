const IACLEnhanced = artifacts.require(".\lib\aragon\IACLEnhanced");

module.exports = function(deployer) {
  deployer.deploy(IACLEnhanced);
};
