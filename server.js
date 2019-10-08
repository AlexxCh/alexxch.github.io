

let app = express();

//initialize event listener
eventListener.init().then(()=>{
	console.error("event listener initialized");
}).catch((err)=>{
	console.error(err);
});

app.set('port', (process.env.PORT || 5000));

app.get('/events', async (req, res) => {
	let result = {
		events: await contractInterface.getPastEvents()
	};
	return res.json(result);
});

app.get('/owner', async (req, res) => {
	let owner = await contractInterface.getOwner({account: environment.accounts[0]});
	let result = {
		owner: owner
	};
	return res.json(result);
});

//////////////////////////////////////////
////////    APP
//////////////////////////////////////////
app.listen(app.get('port'), () => console.log('Owned Smart Contract App') );
