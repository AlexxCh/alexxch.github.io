
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
		"anonymous": false,
		"inputs": [],
		"name": "TEST2",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "test1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "test2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
console.log('test');
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

let counter = web3.eth.contract(abi).at('0xd7001fb991a8797ecda33d32967523c3bdda2612');

var myEvent = counter.Test1({},{fromBlock: 0, toBlock: 'latest'});
console.log(myEvent);
myEvent.watch(function (err, result) {
  if (err) {
    return error(err);
  }
//console.log(result);
//console.log(result.args);
  console.log("Transfer was incremented by address: " + result.args._from);
})