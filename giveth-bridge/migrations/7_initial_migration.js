const Escapable = artifacts.require("giveth-common-contracts/contracts/Escapable");


var  _escapeHatchCaller = '0x06Da25591CdF58758C4b3aBbFf18B092e4380B65'; 
var  _escapeHatchDestination= '0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';
module.exports = function(deployer) {
  deployer.deploy(Escapable, _escapeHatchCaller, _escapeHatchDestination );
};

//29524947,
//33112389300
//1000000000