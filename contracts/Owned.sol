pragma solidity ^0.4.23;

contract Owned {
    address owner;
    uint currentPrice;

    constructor () public {
        owner = msg.sender;
        currentPrice = 0;
    }

    function getOwner() public view returns ( address _owner, uint _currentPrice) {
        return (owner, currentPrice);
    }

    function () public payable {
        require (msg.value > currentPrice);
        owner = msg.sender;
        currentPrice = msg.value;
        emit OwnerUpdated(owner, currentPrice, now);
    }

    event OwnerUpdated(address newOwner, uint newPrice, uint timestamp);
}
