
let Web3 = require('web3');

	var MAINET_RPC_URL = 'https://mainnet.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var ROPSTEN_RPC_URL = 'https://ropsten.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var KOVAN_RPC_URL = 'https://kovan.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var RINKEBY_RPC_URL = 'https://rinkeby.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;

	var CURRENT_URL = RINKEBY_RPC_URL;

    var web3 = new Web3(new Web3.providers.HttpProvider(CURRENT_URL));


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
		"inputs": [],
		"name": "Test1",
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
var MyContract = web3.eth.contract(abi);
// initiate contract for an address
var myContractInstance = MyContract.at('0x651f91fe0beb24df8f870103342aac34f55a4eb8');


var event = myContractInstance.Test1({}, {fromBlock: 0, toBlock: 'latest'})
// watch for changes
event.watch(function(error, result){
 if (!error)
   console.log(result);
});

