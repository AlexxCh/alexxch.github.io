let networkId; // network ID
let account; // user account
let dataUrl = "/lister/coinsData";
// let dataUrl = "/lister/coinsData?ropsten=true" // for ropsten

	let Web3 = require('web3');
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


function getAccountAndNetwork() {
    web3.version.getNetwork((err, netId) => {
        $('.swapButClass').css('display', 'none');
        $('.descLineMargin').css('margin', 'auto');
        account = window.web3.eth.accounts[0];
        networkId = netId;
        if (networkId == 1) {
            $('.networkName').html(`<button class="btn btn-success animation-on-hover" type="button" onclick='navAlerts(2)'>MAIN NETWORK</button>`);
        } else if (networkId == 3) {
            dataUrl = "/lister/coinsData?ropsten=true";
            $('.networkName').html(`<button class="btn btn-warning animation-on-hover" type="button" onclick='navAlerts(3)'>ROPSTEN TEST NETWORK</button>`);
        } else {
            $('.networkName').html(`<button class="btn btn-warning animation-on-hover" type="button" onclick='navAlerts(4)'>NOT MAIN NETWORK</button>`);
        }
        if (account) {
            let stringLen = account.length;
            let text = `${account.slice(0, 6)}...${account.slice(stringLen-4, stringLen)}`;
            $('.addressCon').text(text);
            if (networkId == 1) {
                let link = `<button class="btn btn-info btn-simple animation-on-hover btn-sm" type="button">
                                <a class="navbar-brand" href="https://etherscan.io/address/${account}" target="_blank">${text}</a>
                            </button>`;
                $('.navUserAdd').html(link);
            } else if (networkId == 4) {
                let link = `<button class="btn btn-info btn-simple animation-on-hover btn-sm" type="button">
                                <a class="navbar-brand" href="https://ropsten.etherscan.io/address/${account}" target="_blank">${text}</a>
                            </button>`;
                $('.navUserAdd').html(link);
            } else {
                let link = `<button class="btn btn-info btn-simple animation-on-hover btn-sm" type="button">
                                <a class="navbar-brand">SHIFT TO MAIN NETWORK</a>
                            </button>`;
                $('.navUserAdd').html(link);
            }
        } else {
            let link = `<button class="btn btn-info btn-simple animation-on-hover btn-sm" type="button">NOT LOGGED-IN</button>`;
            $('.navUserAdd').html(link);
        }
        ifWeb3Configured();
        updateNavOrderbook();
    });
}