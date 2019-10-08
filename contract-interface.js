let Web3 = require('web3');
let environment = require('environment');
let contract = require('contract');

let web3_http = new Web3(environment.web3Provider_http);
let web3_ws = new Web3(environment.web3Provider_ws);

let contractInstanceWS = new web3_ws.eth.Contract(contract.ABI, environment.ownedContractAddress);
let contractInstanceHTTP = new web3_http.eth.Contract(contract.ABI, environment.ownedContractAddress);

let callContractMethod = async (f, account) => {
	var result = null;
	try {
		result = await f.call({from: account});
	}
	catch (err) {
		console.log(err);
	}
	return result;
};

exports.getOwner = async (parameters) => {
	var owner = {};

	let results = await callContractMethod(contractInstanceHTTP.methods.getOwner(), parameters.account);

	if (results != null) {
		owner.address = results._owner;
		owner.price = parseInt(results._currentPrice);
	}

	return owner;
};

exports.getPastEvents = async() => {
	let events = await contractInstanceHTTP.getPastEvents('OwnerUpdated', { fromBlock: 0 });
	return events;
};

exports.getContractInstance = (parameters) => {
	if (parameters.type = "wss") {
		return contractInstanceWS;
	}

	return contractInstanceHTTP;
};
