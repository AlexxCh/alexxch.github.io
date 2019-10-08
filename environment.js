exports.INFURA_API_KEY = process.env.INFURA_API_KEY ||  '66492ced9c334deeb2bf9cd40f4e09b0';
exports.web3Provider_ws = process.env.WEB3_PROVIDER_WS || 'wss://ropsten.infura.io/ws';
exports.web3Provider_http = process.env.WEB3_PROVIDER_HTTP ||  'https://ropsten.infura.io/v3/' + exports.INFURA_API_KEY;

exports.ownedContractAddress = process.env.OWNED_CONTRACT_ADDRESS || '0x59729917abf791f76642cdeeb55735c21db45b45';
exports.accounts = ['0xA6A0b62AC2AE741F32312C9E729627f698f69658', '0x40139640268BD9863e3caBede4D6586A1949E3C9', '0xee565d14CA69AF3fEc5b5BAF7462f25689dadbAe'];
