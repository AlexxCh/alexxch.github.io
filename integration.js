
let Web3 = require('web3');

	var MAINET_RPC_URL = 'https://mainnet.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var ROPSTEN_RPC_URL = 'https://ropsten.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var KOVAN_RPC_URL = 'https://kovan.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var RINKEBY_RPC_URL = 'https://rinkeby.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;

	var CURRENT_URL = RINKEBY_RPC_URL;

    //var web3 = new Web3(new Web3.providers.HttpProvider(CURRENT_URL));


//var Web3 = require('web3');
//let web3 = new Web3(web3.currentProvider);
let abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			}
		],
		"name": "cancelOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_givenTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_givenTokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_takenTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_takenTokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_orderValidUntil",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_nonce",
				"type": "uint256"
			}
		],
		"name": "createOrder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			}
		],
		"name": "OrderCancelled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "maker",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "makerTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "givenTokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "takenTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "takenTokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "orderValidUntil",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			}
		],
		"name": "OrderCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "by",
				"type": "address"
			}
		],
		"name": "OrderFilled",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			}
		],
		"name": "trade",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orderHashArray",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "orderHashList",
		"outputs": [
			{
				"internalType": "address",
				"name": "maker",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "givenTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "givenTokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "takenTokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "takenTokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "orderValidUntil",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nonce",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
/*var MyContract = web3.eth.contract(abi);
// initiate contract for an address
var myContractInstance = MyContract.at('0x920f6aF3F0B36Da0565707207ec5E54c84257c3e');
var result = myContractInstance.totalSupply();
console.log(result) // '0x25434534534'
var myevent = myContractInstance.Transfer();
// watch for changes
myevent.watch(function(error, result){
 if (!error)
   console.log(result);
myevent.stopWatching();
});*/


/*
let web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0'));
var MyContract = web3.eth.contract(abi);
console.log(MyContract);
const myContractInstance = MyContract.at('0x920f6aF3F0B36Da0565707207ec5E54c84257c3e');
console.log(myContractInstance);
var myEvent = myContractInstance.Transfer({},{fromBlock: 0, toBlock: 'latest'});
console.log(myEvent);
myEvent.watch(function(error, result){
  console.log(result);
});
// would stop and uninstall the filter
//myEvent.stopWatching();*/

let counter = web3.eth.contract(abi).at('0x8e7c770cba5cbb342880e57fada571fdbefc0691');

var myEvent = counter.Transfer({},{fromBlock: 0, toBlock: 'latest'});
console.log(myEvent);
myEvent.watch(function (err, result) {
  if (err) {
    return error(err);
  }
//console.log(result);
//console.log(result.args);
  console.log("Transfer was incremented by address: " + result.args._from);
})

$("#orders").innerHTML = "Orders";