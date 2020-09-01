pragma solidity >=0.4.0 <0.6.0;
import "./IKernelEnhanced.sol";

interface IDAOFactory {
    function newDAO(address _root) external returns (IKernelEnhanced);
}