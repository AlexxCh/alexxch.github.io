/*
	Читаем ивенты CreateOrder, выводим все прочитанные на фронт, без учета исполненых и просроченных.
	По кнопке вызывается функция trade
	Функция проверяет разрешение на перемещение токенов с адреса вызывающего для адреса смарт-контракта биржи: если нет разрешения, то вызывается функция токена approve, потом функция смарт-контракта обмена trade
	Если разрешение уже есть, то вызывается функция trade.

*/

let abi = [
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

var exchange = web3.eth.contract(abi).at('0x9b7fcff7f0579bf15e0b4cbe8e91d9bccea9d874');
var myEvent = exchange.OrderCreated({},{ fromBlock: 0, toBlock: 'latest'});
var arr = [];
myEvent.watch(function (err, res) {
	if (err) {
		return error(err);
	}
	exchange.orderHashList(res.args.orderHash, function(err, result) {
		if (Date.now() < result[5].c[0]*1000) {
			var string = $('tbody').html();
			string += '<tr class="table-warning"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>' + convert(result[5].c[0]) + '</td><td>' + res.args.orderHash + '</td>';
			string += '<td><button onclick="trade(\'' + res.args.orderHash + '\')">Торговать!</button></td></tr>';
			$('tbody').html(string);
			arr.push(result[1]);
			arr.push(result[3]);
			for (let i = 0; i < arr.length; i++) {
				let token = web3.eth.contract(tokenABI).at(arr[i]);
				token.symbol.call(function(error, result){
					let str = '<a href="https://rinkeby.etherscan.io/address/' + arr[i] + '" target="_blank">';
					str += result;
					str += '</a>';
					$('.' + arr[i]).html(str);
				});
			}
		}
		else if (result[5].c[0] == 0) {
			var string = $('tbody').html();
			string += '<tr class="table-info"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>Отменен</td><td>' + res.args.orderHash + '</td>';
			string += '<td></td></tr>';
			$('tbody').html(string);
			arr.push(result[1]);
			arr.push(result[3]);
			for (let i = 0; i < arr.length; i++) {
				let token = web3.eth.contract(tokenABI).at(arr[i]);
				token.symbol.call(function(error, result){
					let str = '<a href="https://rinkeby.etherscan.io/address/' + arr[i] + '" target="_blank">';
					str += result;
					str += '</a>';
					$('.' + arr[i]).html(str);
				});
			}
		}
		else if (result[5].c[0] == 1) {
			var string = $('tbody').html();
			string += '<tr class="table-success"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>Исполнено</td><td>' + res.args.orderHash + '</td>';
			string += '<td></td></tr>';
			$('tbody').html(string);
			arr.push(result[1]);
			arr.push(result[3]);
			for (let i = 0; i < arr.length; i++) {
				let token = web3.eth.contract(tokenABI).at(arr[i]);
				token.symbol.call(function(error, result){
					let str = '<a href="https://rinkeby.etherscan.io/address/' + arr[i] + '" target="_blank">';
					str += result;
					str += '</a>';
					$('.' + arr[i]).html(str);
				});
			}
		}
		else {
			var string = $('tbody').html();
			string += '<tr class="table-danger"><td>' + result[0] + '</td><td class="' + result[1] + '"></td><td>' + result[2].c[0] + '</td><td class="' + result[3] + '"></td><td>' + result[4].c[0] + '</td><td>' + convert(result[5].c[0]) + ' (просрочено)</td><td>' + res.args.orderHash + '</td>';
			string += '<td></td></tr>';
			$('tbody').html(string);
			arr.push(result[1]);
			arr.push(result[3]);
			for (let i = 0; i < arr.length; i++) {
				let token = web3.eth.contract(tokenABI).at(arr[i]);
				token.symbol.call(function(error, result){
					let str = '<a href="https://rinkeby.etherscan.io/address/' + arr[i] + '" target="_blank">';
					str += result;
					str += '</a>';
					$('.' + arr[i]).html(str);
				});
			}
		}
	})
});

function trade(hash) {
	exchange.orderHashList.call(hash, function (err, result) {
		var add = result[3];
		var amount = result[4];
		let taken = web3.eth.contract(tokenABI).at(add);
		taken.allowance.call(web3.eth.accounts[0], '0x9b7fcff7f0579bf15e0b4cbe8e91d9bccea9d874', function (err, result) {
			console.log(result.c[0]);
			if (result.c[0] < amount) {
				console.log('not ok');
				taken.approve('0x9b7fcff7f0579bf15e0b4cbe8e91d9bccea9d874', amount, function (err, result) {
					exchange.trade(hash, {from: web3.eth.accounts[0]}, function(err, result) {});
				});
			}
			else {
				console.log('ok');
				exchange.trade(hash, {from: web3.eth.accounts[0]}, function(err, result) {});
			}
		}); 
	});
}

function convert(unixtimestamp){

 // Unixtimestamp
 //var unixtimestamp = document.getElementById('timestamp').value;

 // Months array
 var months_arr = ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'];

 // Convert timestamp to milliseconds
 var date = new Date(unixtimestamp*1000);

 // Year
 var year = date.getFullYear();

 // Month
 var month = months_arr[date.getMonth()];

 // Day
 var day = date.getDate();

 // Hours
 var hours = date.getHours();

 // Minutes
 var minutes = "0" + date.getMinutes();

 // Seconds
 var seconds = "0" + date.getSeconds();

 // Display date time in dd-Mm-yyyy h:m:s format
 var convdataTime = day+'-'+month+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 
 return convdataTime;
 
}