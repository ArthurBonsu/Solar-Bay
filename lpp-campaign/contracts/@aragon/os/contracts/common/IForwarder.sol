pragma solidity >=0.4.0 <0.6.0;


interface IForwarder {
    function isForwarder() public pure returns (bool);
    function canForward(address sender, bytes evmCallScript) public view returns (bool);
    function forward(bytes evmCallScript) public;
}
