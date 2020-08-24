const MiniMeToken = artifacts.require("minimetoken/contracts/MiniMeToken");

  var  _tokenFactory ='0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';
  var        _parentToken ='0x06Da25591CdF58758C4b3aBbFf18B092e4380B65';
  var     _parentSnapShotBlock ='0';
  var    _tokenName ='Arthurtokens' ;
  var    _decimalUnits='2';
  var    _tokenSymbol='Atk';
  var     _transfersEnabled='true';

module.exports = function(deployer) {
  deployer.deploy(MiniMeToken, _tokenFactory, _parentToken, _parentSnapShotBlock, _tokenName, _decimalUnits, 
 _tokenSymbol,  _transfersEnabled);
};

//29524947,
//33112389300
//1000000000