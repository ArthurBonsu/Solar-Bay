pragma solidity >=0.4.0 <0.6.0;



interface IEVMScriptExecutor {
    function execScript(bytes script, bytes input, address[] blacklist) external returns (bytes);
}
