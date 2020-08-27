pragma solidity >=0.4.0 <0.6.0;


import "@aragon/os/contracts/kernel/Kernel.sol";


contract UpgradedKernel is Kernel {
    // just adds one more function to the kernel implementation.
    // calling this function on the previous instance will fail
    function isUpgraded() public constant returns (bool) {
        return true;
    }
}
