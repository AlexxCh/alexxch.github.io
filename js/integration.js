var res;
/*jQuery.ajax({
    url: "https://rinkeby.etherscan.io/token/0x3ead2f2dacdcba32f9834a71464cae15a88755e8",
    success: function(result) {
    	res = result;
    	res = res.replace('<script src="/cdn-cgi/apps/head/M2jbC5w-2kzKWSY9kfVDccG4Ox8.js"></script><script type="text/javascript" src="/assets/plugins/jquery/jquery.min.js"></script>', "")
        res = res.replace('<script type="text/javascript" src="/jss/jquery-ui.min.js"></script>', "");
        res = res.replace('<link rel="stylesheet" href="/assets/css/pages/page_search_inner.css">', "");
        res = res.replace('<script type="text/javascript" src="/jss/qrcode.min.js"></script>', "");
        res = res.replace('<link rel="Stylesheet" href="/css/jquery-ui.min.css" type="text/css" />', "");
        res = res.replace('<script type="text/javascript" src="/assets/combine-js-bottom.js?v=1.11"></script>', "");
        res = res.replace('<script type="text/javascript" src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>', "");
        res = res.replace('<link rel="shortcut icon" href="/images/favicon2.ico" /><link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin" /><link rel="stylesheet" href="/assets/plugins/bootstrap/css/bootstrap.min.css" /><link rel="stylesheet" href="/assets/css/style-mod.css" /><link rel="stylesheet" href="/assets/custom-head-foot-scroll-blue.min.css?v=0.072" /><link rel="stylesheet" href="/assets/plugins/line-icons/line-icons.css" /><link rel="stylesheet" href="/assets/plugins/font-awesome/css/font-awesome.min.css" /></head>', "");
        $('body').append('<div style="display:none" id="cc">'+res+'</div>');
        $('#holders').html(parseInt($("#cc #ContentPlaceHolder1_tr_tokenHolders td:nth-child(2)").text().replace(/\D+/g,"")));
    	$('.totalSupply:nth-child(1)').html($('.tditem').html().replace("TTT", "").replace("STD", "").replace(",", " ") + "<span class='color'>STD</span>");
        $('.totalSupply:nth-child(2)').html($('.tditem').html().replace("TTT", "").replace("STD", "").replace(",", " ") + " USD");

    },
});*/
let Web3 = require('web3'),
	priceETH = 0;z
if (typeof web3 !== 'undefined'){
    web3 = new Web3(web3.currentProvider);
}
else {
	var MAINET_RPC_URL = 'https://mainnet.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var ROPSTEN_RPC_URL = 'https://ropsten.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var KOVAN_RPC_URL = 'https://kovan.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;
	var RINKEBY_RPC_URL = 'https://rinkeby.infura.io/v3/66492ced9c334deeb2bf9cd40f4e09b0' ;

	var CURRENT_URL = RINKEBY_RPC_URL;

    var web3 = new Web3(new Web3.providers.HttpProvider(CURRENT_URL));
}

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "forward",
				"type": "uint8"
			},
			{
				"name": "height",
				"type": "uint8"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "hire",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "latitude",
				"type": "string"
			},
			{
				"name": "longtitude",
				"type": "string"
			}
		],
		"name": "missionCompleted",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "returnETH",
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
				"name": "forward",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "height",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "LogDroneHired",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "latitude",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "longtitude",
				"type": "string"
			}
		],
		"name": "LogMissionComplete",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [],
		"name": "LogMissionFailed",
		"type": "event"
	}
];
const contractAddress = "0xcf09944e202dD0A0e67671109024555fB2113d73";
const tokenAddress = "0x3ead2f2dacdcba32f9834a71464cae15a88755e8";
let MyContract = web3.eth.contract(abi);
let myContractInstance = MyContract.at(contractAddress);
let countOfTransfers, value, transfers;

 
 $(function(){
    $.getJSON(
        'https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs&fromBlock=379224&toBlock=latest&address='+tokenAddress+'&topic0=0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef&apikey=YourApiKeyToken', 
        function(data) {
            transfers = data.result.length;
        });

});

$(function(){
    $.getJSON(
        'https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=USD', 
        function(data){
            priceETH=parseFloat(data[0].price_usd).toFixed(2);
            $('.container .wrap-calc .calc-row .calc-col .calc-label span').html(priceETH + "$")
        })
});

$('.wrap-calc .calc-row:nth-child(1) input').keyup(function(){
	value = parseFloat($('.wrap-calc .calc-row:nth-child(1) input').val());
	$('.wrap-calc .calc-row:nth-child(2) input').val((value*priceETH).toFixed(2));
})

$('.wrap-calc .calc-row:nth-child(2) input').keyup(function(){
	var value2 = parseFloat($('.wrap-calc .calc-row:nth-child(2) input').val());
	$('.wrap-calc .calc-row:nth-child(1) input').val((value2/priceETH).toFixed(2));
    value = parseFloat($('.wrap-calc .calc-row:nth-child(1) input').val());
})
/*
setInterval(function(){
	$('#transfers').html(transfers);
}, 10);
*/
$('#buy').click(function(){
	if(web3.eth.accounts[0]!=undefined){
		web3.eth.sendTransaction({
			to: contractAddress,
			from: web3.eth.accounts[0],
			value: web3.toWei(value, 'ether')
		},
		function(error){
			console.log(error);
		});
	} else{
		alert("You have to install MetaMask");
	}
});






// $(function(){
//     $.getJSON(
//         'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xa74476443119a942de498590fe1f2454d7d4ac0d&address=0x7da82c7ab4771ff031b66538d2fb9b0b047f6cf9&tag=latest&apikey=YourApiKeyToken', 
//         function(data) {

//         		console.log(Number(data.result))
        	
//     	});
// });



