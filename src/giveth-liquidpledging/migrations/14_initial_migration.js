const IDAOFactory = artifacts.require(".\lib\aragon\IDAOFactory");

module.exports = function(deployer) {
  deployer.deploy(IDAOFactory);
};
