
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

let tokenABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


let counter = web3.eth.contract(abi).at('0x8e7c770cba5cbb342880e57fada571fdbefc0691');

var myEvent = counter.OrderCreated({},{fromBlock: 0, toBlock: 'latest'});
myEvent.watch(function (err, result) {
  if (err) {
    return error(err);
  }
  //console.log("Transfer was incremented by address: " + result.args._from);
  $( "tbody" ).html(function() {
		let token1Add = '' + result.args.makerTokenAddress;
		let token2Add = '' + result.args.takenTokenAddress;
		let token1 = web3.eth.contract(tokenABI).at(result.args.makerTokenAddress);
		let token2 = web3.eth.contract(tokenABI).at(result.args.takenTokenAddress);
		var string = '<tr><td>' + result.args.maker + '</td><td>';
		string += token1.symbol.call() + '</td><td>';
		string += result.args.givenTokenAmount + '</td><td>';
		string += token2.symbol.call() + '</td><td>'; 
		string += result.args.takenTokenAmount + '</td><td>' + result.args.validUntil+ '</td><td>' + result.args.orderHash + '</td></tr>';
		return string;
  });
})

//$( "div" ).html( "<span class='red'>Hello <b>Again</b></span>" );