const Pausable = artifacts.require("./lib/Pausable");

module.exports = function(deployer) {
  deployer.deploy(Pausable);
};
