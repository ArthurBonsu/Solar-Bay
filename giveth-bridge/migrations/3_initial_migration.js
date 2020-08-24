const FailClosedVault = artifacts.require("./lib/FailClosedVault");

var _escapeHatchCaller= '0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';  
var _escapeHatchCaller= '0x06Da25591CdF58758C4b3aBbFf18B092e4380B65'; 
var _absoluteMinTimeLock= '0';  
var _timeLock= '0';  
var _securityGuard='0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';
var _maxSecurityGuardDelay='0';   


module.exports = function(deployer) {
  deployer.deploy(FailClosedVault, _escapeHatchCaller,_escapeHatchCaller, _absoluteMinTimeLock,_timeLock, _securityGuard,  _maxSecurityGuardDelay);
};

//29524947,_timeLock
//33112389300
//1000000000