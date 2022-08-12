require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rifle spider unusual hockey clock oil spot'; 
let testAccounts = [
"0x6f091309a53fbec7c2a5a7e4c2c9e341acc8e9439904d75e7a41c0aa96a800bc",
"0x4cc53b5ee2daacdca3f1ce6330dd52675f18d1ba20632ee78c9145e7bf870dc4",
"0x058f6bb28fbc3493c8dfa6cbcf3909cddbd4c91736bdee43cbb6c34ce33db553",
"0xddabdaf0461951728e2e4716351c5ce07062f73cf28fe98b92afebcaf10f1fe9",
"0xab08c34e1ee11dd5a0a1fa1f681ecaee060bb5ca00ef62aee460f3fb7c447814",
"0xb84bd87e2255295a7f05c75daafe961310a4c252a91bab8ff0967f969746ceca",
"0xfcdcdabcfc86a370e1210b873671e991cfd3f2b8497be69339829c2f3e7dd369",
"0x9228833054bcf4017eebcef81b36a345ddade009dd6360235d5f06c53feffee7",
"0xedf3f18be3cca72a95579d40612b0acf11585938f39380901d4fb61e6d5578ca",
"0x813ae523c6671d8d8236b794531e58869dac14c034ffc1ade603e981c6baf2b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

