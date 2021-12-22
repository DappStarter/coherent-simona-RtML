require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remind honey hope kiwi obscure ghost'; 
let testAccounts = [
"0xc3a71259e1c6525560934ae980d3c6a96c3b7d77a211f866371911616c6acc5d",
"0xfa3d9282733561449f0afad65d6563e3986a23130ccd4d439ed327d7430dfdc7",
"0xa1b2dd782bc47432d5b4f2567d63a3e72938f692977f96e7d037eaf9a06badec",
"0xafbe324ca952e06eb8062b2d88e7b2c7fd3bdae6392ebf32d3a96d5538d3a90f",
"0xf3ce04ae07bfc5206faa2b62f91c396d4de2bf241df5dbb3825118eb4254d9b6",
"0x8bfd8daea04e1b2721dd1a1b9960cca59ced22cb1edf0f62a924cde6a8248776",
"0xe18ff114260c5b87d7dc9acc475bf688bf393f803d9202b7c585c81202a37824",
"0xda12fc34961605cab32d3a1974048c42a01bec2ae6e7c9febf1c5474f04c98a3",
"0xdf313a7f351ec3dba20ad72fda9194ac5af145752039302cee16516f4584e00b",
"0x3888ff0d5f7f6d8b625fd6afdf09b681b510ca7389a024c1b601f06cabc71baf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

