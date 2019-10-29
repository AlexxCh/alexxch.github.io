/*
	Личный кабинет
	Отображаются балансы по всем токенам, которые есть на счету.
	Вывод этих токенов с биржи на свой адрес
	Ввод нового токена
	Список всех ордеров, созданных пользователем. Активные ордера  можно отменить.

*/

window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

let abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			}
		],
		"name": "AdminAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			}
		],
		"name": "AdminDeleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "AdminshipDisabled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "AdminshipEnabled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "internalBalance",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerDecimalsOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerMinOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerNew",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerDecimalsNew",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeMakerMinNew",
				"type": "uint256"
			}
		],
		"name": "FeeMakerChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerDecimalsOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerMinOld",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerNew",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerDecimalsNew",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "feeTakerMinNew",
				"type": "uint256"
			}
		],
		"name": "FeeTakerChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
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
				"indexed": true,
				"internalType": "address",
				"name": "givenTokenAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "givenTokenAmount",
				"type": "uint256"
			},
			{
				"indexed": true,
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
				"indexed": true,
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "by",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "remainingSum",
				"type": "uint256"
			}
		],
		"name": "OrderFilled",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
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
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "internalBalance",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOnOrder",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
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
				"internalType": "uint256",
				"name": "_feeMaker",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeMakerDecimals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeMakerMin",
				"type": "uint256"
			}
		],
		"name": "changeFeeMaker",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_feeTaker",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeTakerDecimals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_feeTakerMin",
				"type": "uint256"
			}
		],
		"name": "changeFeeTaker",
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
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "deleteAdmin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "depositEth",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "depositToken",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "disableAdminship",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "enableAdminship",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isAdmin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isOwner",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
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
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "max",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "min",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
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
		"name": "orderFilled",
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
				"name": "nonce",
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
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "renounceOwnership",
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
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setAdmin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "orderHash",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "trade",
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
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
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
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
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
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawComission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
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

var addresses = []; var s = 0;
var exchange = web3.eth.contract(abi).at('0x4cf60bcc443429dbb55f3e8924628c07662d9fe6');
//var depositEvent = exchange.Deposit({sender:  web3.eth.accounts[0]},{fromBlock: 0, toBlock: 'latest', address: web3.eth.accounts[0]});
var depositEvent = exchange.Deposit({},{fromBlock: 0, toBlock: 'latest'});

let promise = new Promise(function(resolve, reject) {
	depositEvent.watch(function (err, res) {
		if (err) {
			return error(err);
		}
		if (!addresses.includes(res.args.token)) {
		  addresses.push(res.args.token); 
		}
	})
	console.log(addresses);
	setTimeout(() => resolve(addresses), 1000);
});

promise.then(function(result) {
	depositEvent.stopWatching();
	addr(result);
});

	var myEvent = exchange.OrderCreated({},{ fromBlock: 0, toBlock: 'latest'});	
	var arr = [];
	myEvent.watch(function (err, res) {
		exchange.orderHashList(res.args.orderHash, function(err, result) {
			if (result[0] != web3.eth.accounts[0]) return 0;
		if (!arr.includes(result[1])) {
		  arr.push(result[1]); 
		}
		if (!arr.includes(result[3])) {
		  arr.push(result[3]); 
		}
			exchange.orderFilled(res.args.orderHash, function (err, r) {
					var string = $('.orders').html();
					if (result[2].c[0] == 0)  {
							string += '<tr class="table-danger"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>' + res.args.orderHash + '</td>';
							string += '<td>Отменен</td></tr>';
					}
					else if (r.c[0] == result[2].c[0]) {
						string += '<tr class="table-success"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>' + res.args.orderHash + '</td>';
							string += '<td>Исполнен</td></tr>';
					}
					else {
						string += '<tr class="table-warning"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>' + res.args.orderHash + '</td>';
						string += '<td>' + r.c[0] + '/' + result[2].c[0] + '</td><td><button onclick="cancel(\'' + res.args.orderHash + '\')">Отменить!</button></td></tr>';
					}
					$('.orders').html(string);
				
			});
		for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
				let token = web3.eth.contract(tokenABI).at(arr[i]);
				token.symbol.call(function(error, result){
					if (result == null) {
						$(".0x0000000000000000000000000000000000000000").html('<a>Wei</a>');
					}
					else {
					console.log(result);
					let str = '<a href="https://rinkeby.etherscan.io/address/' + arr[i] + '" target="_blank">';
					str += result;
					str += '</a>';
					$('.' + arr[i]).html(str);
					}
				});			
		}
		$(".0x0000000000000000000000000000000000000000").html('<a>Wei</a>');
	})
	});

function addr(addresses) {
	for (let i = 0; i < addresses.length; i++) {
		exchange.balances(addresses[i], web3.eth.accounts[0], function (err, result) {
			if (Number(result) != 0) {
				var string = $('tbody').html();
				string +='<tr><td class="' + addresses[i] + '-value"></td> <td class="' + addresses[i] + '-symbol"></td><td class="' + addresses[i] + '-on-orders"></td><td class="' + addresses[i] + '-free"></td><td><input id="' + addresses[i] + '" placeholder="Кол-во"></td><td><button onclick="returnToken(\'' + addresses[i] + '\')">Вывести!</button></td></tr>';
				$('tbody').html(string);
				convert(Number(result), addresses[i])
				
				var val = Number(result);
				exchange.balanceOnOrder(addresses[i], web3.eth.accounts[0], function (err, result) {
					$('.' + addresses[i] + '-on-orders').html(Number(result));
					$('.' + addresses[i] + '-free').html(val - Number(result));
				});
			}
		});
			
		
	}
	
	symbs(addresses);
}

function symbs(addresses) {
	for (let i = 0; i < addresses.length; i++) {
			let token = web3.eth.contract(tokenABI).at(addresses[i]);
			token.symbol.call(function(error, result){
				if (result == null) $(".0x0000000000000000000000000000000000000000-symbol").html('Wei');
				else {
				let str = $('.' + addresses[i] + '-symbol').html();
				str += '<a href="https://rinkeby.etherscan.io/address/' + addresses[i] + '" target="_blank">';
				str += result;
				str += '</a>';
				$('.' + addresses[i] + '-symbol').html(str);
				}
			});
	}
}

function returnToken(addr) {
	exchange.withdraw(addr, $("#"+addr).val(), {from: web3.eth.accounts[0]}, function(err, result) {});
}

function inject() {
	if ($('#new-addr').val() == '0x0000000000000000000000000000000000000000') 
		exchange.depositEth({value: $('#amount').val()}, function(err, result) {});
	else {
		let token = web3.eth.contract(tokenABI).at($('#new-addr').val());
		token.allowance.call(web3.eth.accounts[0], '0x4cf60bcc443429dbb55f3e8924628c07662d9fe6', function(error, result){
			if (Number(result) < Number($('#amount').val())) {
				token.approve('0x4cf60bcc443429dbb55f3e8924628c07662d9fe6', $('#amount').val(), function(error, result){
					exchange.depositToken($('#new-addr').val(), $('#amount').val(), function(err, result) {});
				})
			}
			else {
				exchange.depositToken($('#new-addr').val(), $('#amount').val(), function(err, result) {});
			}
		})
	}
}

function cancel(hash) {
	exchange.cancelOrder(hash, {from: web3.eth.accounts[0]}, function(err, result) {});
}

function convert(num, addr) {
	if (addr = '0x0000000000000000000000000000000000000000') {
		let str = num.toString;
		if (str.length > 18) {
			str.splice(str.length - 18, 0, '.');
			console.log(Number(str));
			$('.' + addr + '-value').html(Number(str));
		}
		else {
			let s;
			for (let i = str.length; i < 18; i++) {
				s+= '0';
			}
			str = '0.' + s + str;
			console.log(Number(str));
			$('.' + addr + '-value').html(Number(str));
		}
	}
	else {
		let token = web3.eth.contract(tokenABI).at(addr);
		token.decimals.call(function(err, result) {
			let str = num.toString;
			if (str.length > Number(result)) {
				str.splice(str.length - Number(result), 0, '.');
				console.log(Number(str));
				$('.' + addr + '-value').html(Number(str));
			}
			else {
				let s;
				for (let i = str.length; i < Number(result); i++) {
					s+= '0';
				}
				str = '0.' + s + str;
				console.log(Number(str));
				$('.' + addr + '-value').html(Number(str));
			}
		})
	}
}