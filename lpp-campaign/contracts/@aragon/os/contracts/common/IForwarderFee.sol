/*
 * SPDX-License-Identifier:    MIT
 */
pragma solidity >=0.4.0 <0.6.0;



interface IForwarderFee {
    function forwardFee() external view returns (address, uint256);
}
