
let contractInstance = contractInterface.getContractInstance({type: "wss"});

exports.init = async () => {
	contractInstance.events.allEvents({
		fromBlock: 0
	}, (error, event) => {
		console.log(event);
	}).on('data', (event) => {
		console.log("Data Event");
		console.log(event);
	}).on('changed', (event) => {
		console.log("Changed Event");
		console.log(event);
	}).on('error', (error) => console.error(error));
};
