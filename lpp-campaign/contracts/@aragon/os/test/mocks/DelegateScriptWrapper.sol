pragma solidity >=0.4.0 <0.6.0;


import "../../contracts/evmscript/executors/DelegateScript.sol";


contract DelegateScriptWrapper is DelegateScript {
    function isContractWrapper(address _target) public constant returns (bool) {
        return isContract(_target);
    }
}
