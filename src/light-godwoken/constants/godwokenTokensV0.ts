import { Hash } from "@ckb-lumos/base";

type GodwokenV0TokenType = {
  network?: string;
  ident?: unknown;
  info: {
    decimals: number;
    name: string;
    symbol: string;
    logoURI?: string;
    shadow?: unknown;
  };
  erc20Info: {
    accountID?: number;
    sudtScriptArgs: Hash;
    ethAddress: Hash;
  };
};

export const GODWOKEN_V0_TOKENS: GodwokenV0TokenType[] = [
  {
    network: "Nervos",
    info: {
      decimals: 8,
      name: "CKB",
      symbol: "CKB",
    },
    erc20Info: {
      sudtScriptArgs: "0x0000000000000000000000000000000000000000000000000000000000000000",
      ethAddress: "0x9D9599c41383D7009C2093319d576AA6F89A4449",
    },
  },
  {
    network: "Nervos",
    info: {
      decimals: 8,
      name: "dCKB",
      symbol: "dCKB",
    },
    erc20Info: {
      sudtScriptArgs: "0xe5451c05231e1df43e4b199b5d12dbed820dfbea2769943bb593f874526eeb55",
      ethAddress: "0x53A1964a163f64Da59eFE6A802e35b5529d078E2",
    },
  },
  {
    network: "Nervos",
    info: {
      decimals: 8,
      name: "TAI",
      symbol: "TAI",
    },
    erc20Info: {
      sudtScriptArgs: "0x08430183dda1cbd81912c4762a3006a59e2291d5bd43b48bb7fa7544cace9e4a",
      ethAddress: "0xf4187511D43B90751a28b6811d13AFB49BeF8452",
    },
  },
  {
    network: "Ethereum",
    ident: "0x0000000000000000000000000000000000000000",
    info: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
      logoURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x9657b32fcdc463e13ec9205914fd91c443822a949937ae94add9869e7f2e1de8",
      },
    },
    erc20Info: {
      accountID: 19,
      sudtScriptArgs: "0x9657b32fcdc463e13ec9205914fd91c443822a949937ae94add9869e7f2e1de8",
      ethAddress: "0x48aA6F7bEe4C0d3e7d918833894ee83357ae0d4C",
    },
  },
  {
    network: "Ethereum",
    ident: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    info: {
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
      logoURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x1b89ae72b96c4f02fa7667ab46febcedf9b495737752176303ddd215d66a615a",
      },
    },
    erc20Info: {
      accountID: 172,
      sudtScriptArgs: "0x1b89ae72b96c4f02fa7667ab46febcedf9b495737752176303ddd215d66a615a",
      ethAddress: "0x07a388453944bB54BE709AE505F14aEb5d5cbB2C",
    },
  },
  {
    network: "Ethereum",
    ident: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    info: {
      decimals: 18,
      name: "DAI",
      symbol: "DAI",
      logoURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xdd97fe4f673ed231af188855f4ca8b1034153c8d4e40f5b4fae2afd5d3f53ccc",
      },
    },
    erc20Info: {
      accountID: 177,
      sudtScriptArgs: "0xdd97fe4f673ed231af188855f4ca8b1034153c8d4e40f5b4fae2afd5d3f53ccc",
      ethAddress: "0x128BEc17A6D527cdA1Fab65958F0D7bda17e4Aef",
    },
  },
  {
    network: "Ethereum",
    ident: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    info: {
      decimals: 18,
      name: "LINK",
      symbol: "LINK",
      logoURI: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xb4f59ca5a3e1b8bdbce38ca8742bcd922c2201d61090cddd4a053b3f786e3275",
      },
    },
    erc20Info: {
      accountID: 178,
      sudtScriptArgs: "0xb4f59ca5a3e1b8bdbce38ca8742bcd922c2201d61090cddd4a053b3f786e3275",
      ethAddress: "0xdDb9265c0bfdd3076336F314f7636B03AC6333c7",
    },
  },
  {
    network: "Ethereum",
    ident: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    info: {
      decimals: 18,
      name: "BAND",
      symbol: "BAND",
      logoURI: "https://cryptologos.cc/logos/band-protocol-band-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xf7d2b6a5e6c9ec564ce11e30e845d7e4ed9fd873eb3a426e9991d4a780d7c35b",
      },
    },
    erc20Info: {
      accountID: 179,
      sudtScriptArgs: "0xf7d2b6a5e6c9ec564ce11e30e845d7e4ed9fd873eb3a426e9991d4a780d7c35b",
      ethAddress: "0x8Ea9E9b797e9497ab044EeE9Aa286A780fEC1911",
    },
  },
  {
    network: "Ethereum",
    ident: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    info: {
      decimals: 18,
      name: "BAT",
      symbol: "BAT",
      logoURI: "https://cryptologos.cc/logos/basic-attention-token-bat-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xe183387147be24ecb3ba04eb480b6042803b1c93954f9c5a0e5a506cd5571b6b",
      },
    },
    erc20Info: {
      accountID: 180,
      sudtScriptArgs: "0xe183387147be24ecb3ba04eb480b6042803b1c93954f9c5a0e5a506cd5571b6b",
      ethAddress: "0xDA65D41BA72bDeDB7f7180025797cC9f531dF3CC",
    },
  },
  {
    network: "Ethereum",
    ident: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    info: {
      decimals: 18,
      name: "SNX",
      symbol: "SNX",
      logoURI: "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xb31800b3c908eaf217a982cb2a0fb8df7ac047485c432634a079a8c158339020",
      },
    },
    erc20Info: {
      accountID: 181,
      sudtScriptArgs: "0xb31800b3c908eaf217a982cb2a0fb8df7ac047485c432634a079a8c158339020",
      ethAddress: "0x97d4d6dD8fFA0E4F7D0b883E7f9B4E71a9AbEb58",
    },
  },
  {
    network: "Ethereum",
    ident: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    info: {
      decimals: 18,
      name: "UNI",
      symbol: "UNI",
      logoURI: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xb52927f7f444eb178461d0fa8b62b67c4a043add18e36248c7e9734d8d077a7e",
      },
    },
    erc20Info: {
      accountID: 182,
      sudtScriptArgs: "0xb52927f7f444eb178461d0fa8b62b67c4a043add18e36248c7e9734d8d077a7e",
      ethAddress: "0x9673Ad4D1a57aaE106e49659Cd35d81A6A4ca70C",
    },
  },
  {
    network: "Ethereum",
    ident: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    info: {
      decimals: 18,
      name: "YFI",
      symbol: "YFI",
      logoURI: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0x7658a43a8ae5f3f9d24c2001815617a31c29a4131bf2d2a67a4006f553116e11",
      },
    },
    erc20Info: {
      accountID: 183,
      sudtScriptArgs: "0x7658a43a8ae5f3f9d24c2001815617a31c29a4131bf2d2a67a4006f553116e11",
      ethAddress: "0xe7c12fB824BBdDD99ffb810bBEF9Fc87bfC84959",
    },
  },
  {
    network: "Ethereum",
    ident: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
    info: {
      decimals: 18,
      name: "BUSD",
      symbol: "BUSD",
      logoURI: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x232678824938dfd87a049122c4e244af88dad7faa79a262362f5bc5356ee4c64",
      },
    },
    erc20Info: {
      accountID: 184,
      sudtScriptArgs: "0x232678824938dfd87a049122c4e244af88dad7faa79a262362f5bc5356ee4c64",
      ethAddress: "0xdAFc31040624D70B2381E59C1AD0AD28112CE79A",
    },
  },
  {
    network: "Ethereum",
    ident: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    info: {
      decimals: 18,
      name: "COMP",
      symbol: "COMP",
      logoURI: "https://cryptologos.cc/logos/compound-comp-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0x82a6b63b13d9980c98b17810eb2599dc94c144c0ddd24fd24e8a7881d93323ff",
      },
    },
    erc20Info: {
      accountID: 185,
      sudtScriptArgs: "0x82a6b63b13d9980c98b17810eb2599dc94c144c0ddd24fd24e8a7881d93323ff",
      ethAddress: "0xE0f817Ef8DeD91BfBafc50AB3ec34C30b2c62A6a",
    },
  },
  {
    network: "Ethereum",
    ident: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    info: {
      decimals: 18,
      name: "MKR",
      symbol: "MKR",
      logoURI: "https://cryptologos.cc/logos/maker-mkr-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xbfe64426d24c81113125b33d092655913c8c759e475403a418f4eab47f405dd9",
      },
    },
    erc20Info: {
      accountID: 186,
      sudtScriptArgs: "0xbfe64426d24c81113125b33d092655913c8c759e475403a418f4eab47f405dd9",
      ethAddress: "0xF128da0AE9242a4aAebfeE892aCEdE31Cf286D55",
    },
  },
  {
    network: "Ethereum",
    ident: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
    info: {
      decimals: 18,
      name: "IOTX",
      symbol: "IOTX",
      logoURI: "https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x8049b09170892d1b04b24c9c185704149d915ab29d6640a1c74bf85e823738f5",
      },
    },
    erc20Info: {
      accountID: 187,
      sudtScriptArgs: "0x8049b09170892d1b04b24c9c185704149d915ab29d6640a1c74bf85e823738f5",
      ethAddress: "0xBa4C164CE191522B1eF3FD851e436d8b8d5F178B",
    },
  },
  {
    network: "Ethereum",
    ident: "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
    info: {
      decimals: 18,
      name: "BEL",
      symbol: "BEL",
      logoURI: "https://cryptologos.cc/logos/belacoin-bela-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xbceed8fd2b30c9e246035890196fed4218e5bff472786f74c19d9b156607070b",
      },
    },
    erc20Info: {
      accountID: 188,
      sudtScriptArgs: "0xbceed8fd2b30c9e246035890196fed4218e5bff472786f74c19d9b156607070b",
      ethAddress: "0x1f8d3551984A2C89030FFcc15BCe2C24878b0c6b",
    },
  },
  {
    network: "Ethereum",
    ident: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
    info: {
      decimals: 18,
      name: "PAX",
      symbol: "PAX",
      logoURI: "https://cryptologos.cc/logos/paxos-standard-pax-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x160093179296127b43624ab641e2561540e18b1f1b8025d8d6830485201a16a1",
      },
    },
    erc20Info: {
      accountID: 189,
      sudtScriptArgs: "0x160093179296127b43624ab641e2561540e18b1f1b8025d8d6830485201a16a1",
      ethAddress: "0x653239a754B167E8967fE8A3d1444e0Aa6Cd004e",
    },
  },
  {
    network: "Ethereum",
    ident: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    info: {
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
      logoURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x5c4ac961a2428137f27271cf2af205e5c55156d26d9ac285ed3170e8c4cc1501",
      },
    },
    erc20Info: {
      accountID: 190,
      sudtScriptArgs: "0x5c4ac961a2428137f27271cf2af205e5c55156d26d9ac285ed3170e8c4cc1501",
      ethAddress: "0xC3b946c53E2e62200515d284249f2a91d9DF7954",
    },
  },
  {
    network: "Ethereum",
    ident: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
    info: {
      decimals: 18,
      name: "SXP",
      symbol: "SXP",
      logoURI: "https://cryptologos.cc/logos/swipe-sxp-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xf49a7d57cd50907d28c0e2ae57b559165ce08aa0ff074fb3b277f6dc5eb285ee",
      },
    },
    erc20Info: {
      accountID: 191,
      sudtScriptArgs: "0xf49a7d57cd50907d28c0e2ae57b559165ce08aa0ff074fb3b277f6dc5eb285ee",
      ethAddress: "0x7ab542aB5A31b29D9cB34eC2aa64356C3A36023F",
    },
  },
  {
    network: "Ethereum",
    ident: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
    info: {
      decimals: 18,
      name: "SUSHI",
      symbol: "SUSHI",
      logoURI: "https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xd7a79519d220983c703fd90083c481fc3144daad7ea05728832cbc021f27c017",
      },
    },
    erc20Info: {
      accountID: 193,
      sudtScriptArgs: "0xd7a79519d220983c703fd90083c481fc3144daad7ea05728832cbc021f27c017",
      ethAddress: "0x8cbBE0A31D4330B96641Ff3D66a4d5Baae3E3348",
    },
  },
  {
    network: "Ethereum",
    ident: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    info: {
      decimals: 18,
      name: "AAVE",
      symbol: "AAVE",
      logoURI: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xaf47fbc88c924f720fd8d4c0aea5dca8bd00ceecd9f8c2ab45415f6a5dd2ee97",
      },
    },
    erc20Info: {
      accountID: 194,
      sudtScriptArgs: "0xaf47fbc88c924f720fd8d4c0aea5dca8bd00ceecd9f8c2ab45415f6a5dd2ee97",
      ethAddress: "0xc04e95A95DA3507B70D6d150321AeFBf44048462",
    },
  },
  {
    network: "Ethereum",
    ident: "0x111111111117dC0aa78b770fA6A738034120C302",
    info: {
      decimals: 18,
      name: "1INCH",
      symbol: "1INCH",
      logoURI: "https://cryptologos.cc/logos/1inch-1inch-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0x5bea7b77283ac8a20bd4e848a67c68349a3880b67278a5565bbbc242a26d3e29",
      },
    },
    erc20Info: {
      accountID: 195,
      sudtScriptArgs: "0x5bea7b77283ac8a20bd4e848a67c68349a3880b67278a5565bbbc242a26d3e29",
      ethAddress: "0x5e6242f8730dcFF116D1324043FbeE8106AcC3B9",
    },
  },
  {
    network: "Ethereum",
    ident: "0x3DB6Ba6ab6F95efed1a6E794caD492fAAabF294D",
    info: {
      decimals: 8,
      name: "LTO",
      symbol: "LTO",
      logoURI: "https://cryptologos.cc/logos/lto-network-lto-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x33e2afa67434322b1368bf5064b31dc20021bcccc871aa5cc6a5380aa58c59f6",
      },
    },
    erc20Info: {
      accountID: 196,
      sudtScriptArgs: "0x33e2afa67434322b1368bf5064b31dc20021bcccc871aa5cc6a5380aa58c59f6",
      ethAddress: "0x572136Bfd2c85877CF53EE65D8F2b367bF52DC5E",
    },
  },
  {
    network: "Ethereum",
    ident: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    info: {
      decimals: 18,
      name: "MATIC",
      symbol: "MATIC",
      logoURI: "https://cryptologos.cc/logos/matic-network-matic-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xb571d967797059352785a0297b3ff740f17df1b97315c311b2c0e0107a0db5a8",
      },
    },
    erc20Info: {
      accountID: 197,
      sudtScriptArgs: "0xb571d967797059352785a0297b3ff740f17df1b97315c311b2c0e0107a0db5a8",
      ethAddress: "0x6DC6fCCB161c2eA8fD9C7647AE7b636e7a6EBCDF",
    },
  },
  {
    network: "Ethereum",
    ident: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
    info: {
      decimals: 18,
      name: "BNT",
      symbol: "BNT",
      logoURI: "https://cryptologos.cc/logos/bancor-bnt-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x4192873b0a0aaeaa04372aa46ff2cd94a90ac1acaa7569458226febec4d6d5ed",
      },
    },
    erc20Info: {
      accountID: 198,
      sudtScriptArgs: "0x4192873b0a0aaeaa04372aa46ff2cd94a90ac1acaa7569458226febec4d6d5ed",
      ethAddress: "0x3C5b9fAFe6C369aF00007e6324a356109216DeFC",
    },
  },
  {
    network: "Ethereum",
    ident: "0x56d811088235F11C8920698a204A5010a788f4b3",
    info: {
      decimals: 18,
      name: "BZRX",
      symbol: "BZRX",
      logoURI: "https://cryptologos.cc/logos/bzx-protocol-bzrx-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xc0ddc82e1a24ccdf637bf19424dfcaa79ccb0dd7bdb1f4fdc7be3457214aee44",
      },
    },
    erc20Info: {
      accountID: 199,
      sudtScriptArgs: "0xc0ddc82e1a24ccdf637bf19424dfcaa79ccb0dd7bdb1f4fdc7be3457214aee44",
      ethAddress: "0xc52f7775FDF32b8a97b1160A4BD2688714f589B0",
    },
  },
  {
    network: "Ethereum",
    ident: "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
    info: {
      decimals: 18,
      name: "MDT",
      symbol: "MDT",
      logoURI: "https://cryptologos.cc/logos/measurable-data-token-mdt-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xe5738a780a759d2f7a1a4b33999d1a7e05d55e0a88efb6068a963aa84531fdbc",
      },
    },
    erc20Info: {
      accountID: 200,
      sudtScriptArgs: "0xe5738a780a759d2f7a1a4b33999d1a7e05d55e0a88efb6068a963aa84531fdbc",
      ethAddress: "0x71d5931a8dFab62d00d58E42230aAECa970711e0",
    },
  },
  {
    network: "Ethereum",
    ident: "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
    info: {
      decimals: 18,
      name: "PNT",
      symbol: "PNT",
      logoURI: "https://cryptologos.cc/logos/pnetwork-pnt-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xbdfe9436470e847122230ec5119eed76ace9a99cca1db628cf8d42d334cc16f5",
      },
    },
    erc20Info: {
      accountID: 201,
      sudtScriptArgs: "0xbdfe9436470e847122230ec5119eed76ace9a99cca1db628cf8d42d334cc16f5",
      ethAddress: "0xD0C94845f8FFEDCCFbdB5446eEf2F4B6a366e00B",
    },
  },
  {
    network: "Ethereum",
    ident: "0xeca82185adCE47f39c684352B0439f030f860318",
    info: {
      decimals: 18,
      name: "PERL",
      symbol: "PERL",
      logoURI: "https://cryptologos.cc/logos/perlin-perl-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0x34ae46f1112be6a0f3d17bdf34d64e8508c4e6a6c23ae352d0915e24ac767224",
      },
    },
    erc20Info: {
      accountID: 202,
      sudtScriptArgs: "0x34ae46f1112be6a0f3d17bdf34d64e8508c4e6a6c23ae352d0915e24ac767224",
      ethAddress: "0xC5c6676EFc356629Dd0736a79Ba98c0A96d854c6",
    },
  },
  {
    network: "Ethereum",
    ident: "0xba100000625a3754423978a60c9317c58a424e3D",
    info: {
      decimals: 18,
      name: "BAL",
      symbol: "BAL",
      logoURI: "https://cryptologos.cc/logos/balancer-bal-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0xcce6d0ac83d2491f8b8bd3875f3577b9e77f08a0396cd2e9274f339eb76e08a4",
      },
    },
    erc20Info: {
      accountID: 203,
      sudtScriptArgs: "0xcce6d0ac83d2491f8b8bd3875f3577b9e77f08a0396cd2e9274f339eb76e08a4",
      ethAddress: "0x195DC187402959717DAc878e95D93130a62d16fE",
    },
  },
  {
    network: "Ethereum",
    ident: "0x5732046A883704404F284Ce41FfADd5b007FD668",
    info: {
      decimals: 18,
      name: "BLZ",
      symbol: "BLZ",
      logoURI: "https://cryptologos.cc/logos/bluzelle-blz-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xda58dca6d334b837dbeb1da27e3ee45039890555bbcadbbd59fa1f32faaa5d5b",
      },
    },
    erc20Info: {
      accountID: 204,
      sudtScriptArgs: "0xda58dca6d334b837dbeb1da27e3ee45039890555bbcadbbd59fa1f32faaa5d5b",
      ethAddress: "0xf0948768ab0E64c649cBdf910eE7F10b4B11bd12",
    },
  },
  {
    network: "Ethereum",
    ident: "0xDDB3422497E61e13543BeA06989C0789117555c5",
    info: {
      decimals: 18,
      name: "COTI",
      symbol: "COTI",
      logoURI: "https://cryptologos.cc/logos/coti-coti-logo.svg?v=013",
      shadow: {
        network: "Nervos",
        ident: "0x70746eb3aeeefb93c7024332e3b129ac09dbdfd238e9a0ff7763ae1b2cd8193e",
      },
    },
    erc20Info: {
      accountID: 205,
      sudtScriptArgs: "0x70746eb3aeeefb93c7024332e3b129ac09dbdfd238e9a0ff7763ae1b2cd8193e",
      ethAddress: "0x2F354Ad6b31E3E3F631B3CbBe61a262F5139C7fd",
    },
  },
  {
    network: "Ethereum",
    ident: "0xE1Be5D3f34e89dE342Ee97E6e90D405884dA6c67",
    info: {
      decimals: 6,
      name: "TRX",
      symbol: "TRX",
      logoURI: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xff7eb7296b2e6896274c37bdf949442f8cbb3f89f60d21d39367e2c93d917ad9",
      },
    },
    erc20Info: {
      accountID: 206,
      sudtScriptArgs: "0xff7eb7296b2e6896274c37bdf949442f8cbb3f89f60d21d39367e2c93d917ad9",
      ethAddress: "0xAA0e6C6Dea0119CDD78666b1e8192bb4583DfF40",
    },
  },
  {
    network: "Ethereum",
    ident: "0x0000000000085d4780B73119b644AE5ecd22b376",
    info: {
      decimals: 18,
      name: "TUSD",
      symbol: "TUSD",
      logoURI: "https://cryptologos.cc/logos/trueusd-tusd-logo.svg?v=002",
      shadow: {
        network: "Nervos",
        ident: "0xeb83e2d417474fb5aeaf3ab13be413e445159ade6865bd28834c34f680b9339a",
      },
    },
    erc20Info: {
      accountID: 207,
      sudtScriptArgs: "0xeb83e2d417474fb5aeaf3ab13be413e445159ade6865bd28834c34f680b9339a",
      ethAddress: "0x9417475FC822a1e4677E2689d73579448B341418",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped BNB (ForceBridge from BSC)",
      symbol: "BNB|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0x578cd6ab8c0800e6fbc17b58633857dac5626883af89f842e79cb8f7af24de75",
      ethAddress: "0xF818146b3abaA7830B94A47C2703eEDE5971D055",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped BUSD (ForceBridge from BSC)",
      symbol: "BUSD|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0x69c215249102308356778d58259c91c0f1988f6f5b07aa614921ee1803ea0059",
      ethAddress: "0xC61BC16E5199E4988d517a08Fa3133194EEdd9fB",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped USDT (ForceBridge from BSC)",
      symbol: "USDT|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0xfd6f1818fe746687ef5268f82ce1835ba1a94fdccee5f098a389aeed0067eb57",
      ethAddress: "0x5C30d9396a97f2279737E63B2bf64CC823046591",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped ETH (ForceBridge from BSC)",
      symbol: "ETH|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0xd61ddc3184767d677be0d741883779aa9513293c4eaa4e0687b5b1caf845edfe",
      ethAddress: "0x6c9A86CF7b9065CefBf9110D8585514c4D304dc3",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped BTCB (ForceBridge from BSC)",
      symbol: "BTCB|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0x9ea7beb4a36469e00bb30dbac75e93672441b483d519556ba9d1424b9294eae5",
      ethAddress: "0x3f8d2b24C6fa7b190f368C3701FfCb2bd919Af37",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped WBNB (ForceBridge from BSC)",
      symbol: "WBNB|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0x29f425f897896c15ca11fd154d8e22ac56b5f49e683d0c88979ad44752fcd520",
      ethAddress: "0x0F0C07a45F3c33898bD307541E01f34C6d054ed6",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped USDC (ForceBridge from BSC)",
      symbol: "USDC|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0xcedd0f67f2d218ab992284ab343c2e729d2a124a1612592deaa9f8b8f8a581dd",
      ethAddress: "0xA21B19d660917C1DE263Ad040Ba552737cfcEf50",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped SFP (ForceBridge from BSC)",
      symbol: "SFP|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0xc66b8a7f4869272e1fd0565535cb444c319b6baafd386c5857f08d87e396cfd5",
      ethAddress: "0x7554dc828c3f28093940BcBE33F438788043408b",
    },
  },
  {
    info: {
      decimals: 18,
      name: "Wrapped iBFR (ForceBridge from BSC)",
      symbol: "iBFR|bsc",
    },
    erc20Info: {
      sudtScriptArgs: "0x5e945aa680b40d9388d4988aee0aebdd2ad9185b6c0ebfd408fa974818de8b6a",
      ethAddress: "0xB5b12d26592cdEa10e056a8557Cb85B01B93F337",
    },
  },
  {
    info: {
      decimals: 8,
      name: "Wrapped WBTC (ForceBridge from Ethereum)",
      symbol: "WBTC|eth",
    },
    erc20Info: {
      sudtScriptArgs: "0x0a2117bce7a84cac80e7c5971919d12987e4da58f79e010c6c2f58c7d6e687e1",
      ethAddress: "0x7818FA4C71dC3b60049FB0b6066f18ff8c720f33",
    },
  },
];
