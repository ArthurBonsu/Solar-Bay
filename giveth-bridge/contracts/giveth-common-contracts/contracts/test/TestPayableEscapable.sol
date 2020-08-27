pragma solidity >=0.4.0 <0.6.0;


import "../Escapable.sol";

contract TestPayableEscapable is Escapable {

    function TestPayableEscapable(address _blackListToken, address _escapeHatchCaller, address _escapeHatchDestination) public 
    Escapable(_escapeHatchCaller,_escapeHatchDestination) {
        blacklistEscapeToken(_blackListToken);
    }

    function () public payable {
    }
}