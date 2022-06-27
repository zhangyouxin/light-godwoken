import { Hash } from "@ckb-lumos/base";

type GodwokenV1TokenType = {
  info: {
    decimals: number;
    name: string;
    symbol: string;
  };
  erc20Info: {
    sudtScriptArgs: Hash;
    ethAddress: Hash;
  };
};

export const GODWOKEN_V1_TOKENS: GodwokenV1TokenType[] = [
  {
    info: {
      decimals: 18,
      name: "pCKB",
      symbol: "pCKB",
    },
    erc20Info: {
      sudtScriptArgs: "0x0000000000000000000000000000000000000000000000000000000000000000",
      ethAddress: "0x7538C85caE4E4673253fFd2568c1F1b48A71558a",
    },
  },
  {
    info: {
      decimals: 8,
      name: "dCKB",
      symbol: "dCKB",
    },
    erc20Info: {
      sudtScriptArgs: "0xe5451c05231e1df43e4b199b5d12dbed820dfbea2769943bb593f874526eeb55",
      ethAddress: "0x893474456C475E738b13DdA824979bF7a355DE39",
    },
  },
  {
    info: {
      decimals: 8,
      name: "TAI",
      symbol: "TAI",
    },
    erc20Info: {
      sudtScriptArgs: "0x08430183dda1cbd81912c4762a3006a59e2291d5bd43b48bb7fa7544cace9e4a",
      ethAddress: "0x291c64443c15E0632B2c4C742CB2b4b49CA36993",
    },
  },
  {
    info: {
      decimals: 18,
      name: "ETH",
      symbol: "ETH",
    },
    erc20Info: {
      sudtScriptArgs: "0x9657b32fcdc463e13ec9205914fd91c443822a949937ae94add9869e7f2e1de8",
      ethAddress: "0x9E858A7aAEDf9FDB1026Ab1f77f627be2791e98A",
    },
  },
  {
    info: {
      decimals: 6,
      name: "USDT",
      symbol: "USDT",
    },
    erc20Info: {
      sudtScriptArgs: "0x1b89ae72b96c4f02fa7667ab46febcedf9b495737752176303ddd215d66a615a",
      ethAddress: "0x8E019acb11C7d17c26D334901fA2ac41C1f44d50",
    },
  },
  {
    info: {
      decimals: 18,
      name: "DAI",
      symbol: "DAI",
    },
    erc20Info: {
      sudtScriptArgs: "0xdd97fe4f673ed231af188855f4ca8b1034153c8d4e40f5b4fae2afd5d3f53ccc",
      ethAddress: "0x2c9Fc6087875646112f66a3C92fEF2d158FAa76e",
    },
  },
  {
    info: {
      decimals: 18,
      name: "LINK",
      symbol: "LINK",
    },
    erc20Info: {
      sudtScriptArgs: "0xb4f59ca5a3e1b8bdbce38ca8742bcd922c2201d61090cddd4a053b3f786e3275",
      ethAddress: "0x81206A83Df57cA79DbF1371Ffdd9CEd1cafA5E17",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BAND",
      symbol: "BAND",
    },
    erc20Info: {
      sudtScriptArgs: "0xf7d2b6a5e6c9ec564ce11e30e845d7e4ed9fd873eb3a426e9991d4a780d7c35b",
      ethAddress: "0x0ca34998bf143D0b1055A89276Ca51c6bD6eDa2D",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BAT",
      symbol: "BAT",
    },
    erc20Info: {
      sudtScriptArgs: "0xe183387147be24ecb3ba04eb480b6042803b1c93954f9c5a0e5a506cd5571b6b",
      ethAddress: "0x153b7608FA00E3dBeaa7568B5D34F614eBdc557d",
    },
  },
  {
    info: {
      decimals: 18,
      name: "SNX",
      symbol: "SNX",
    },
    erc20Info: {
      sudtScriptArgs: "0xb31800b3c908eaf217a982cb2a0fb8df7ac047485c432634a079a8c158339020",
      ethAddress: "0xB5Eff33b4D4ce65271d6263b2d03E328495a90D9",
    },
  },
  {
    info: {
      decimals: 18,
      name: "UNI",
      symbol: "UNI",
    },
    erc20Info: {
      sudtScriptArgs: "0xb52927f7f444eb178461d0fa8b62b67c4a043add18e36248c7e9734d8d077a7e",
      ethAddress: "0x5b99513a6c7F1c81536B4b59EEeA1514FFE142C7",
    },
  },
  {
    info: {
      decimals: 18,
      name: "YFI",
      symbol: "YFI",
    },
    erc20Info: {
      sudtScriptArgs: "0x7658a43a8ae5f3f9d24c2001815617a31c29a4131bf2d2a67a4006f553116e11",
      ethAddress: "0x49e1fd3e91dD9642c030B71d01507E55f667ea79",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BUSD",
      symbol: "BUSD",
    },
    erc20Info: {
      sudtScriptArgs: "0x232678824938dfd87a049122c4e244af88dad7faa79a262362f5bc5356ee4c64",
      ethAddress: "0x9dC5014998b6A7351d75D731263199D31feb4474",
    },
  },
  {
    info: {
      decimals: 18,
      name: "COMP",
      symbol: "COMP",
    },
    erc20Info: {
      sudtScriptArgs: "0x82a6b63b13d9980c98b17810eb2599dc94c144c0ddd24fd24e8a7881d93323ff",
      ethAddress: "0xD56b1007CBf17452DD5Fa65b2d5ee0F70ef11D47",
    },
  },
  {
    info: {
      decimals: 18,
      name: "MKR",
      symbol: "MKR",
    },
    erc20Info: {
      sudtScriptArgs: "0xbfe64426d24c81113125b33d092655913c8c759e475403a418f4eab47f405dd9",
      ethAddress: "0x32e1682D2d512cEface2ccd180e6682C851c24A8",
    },
  },
  {
    info: {
      decimals: 18,
      name: "IOTX",
      symbol: "IOTX",
    },
    erc20Info: {
      sudtScriptArgs: "0x8049b09170892d1b04b24c9c185704149d915ab29d6640a1c74bf85e823738f5",
      ethAddress: "0x2A800F1e488988d3B6e4a2BE24f6A17058af3eB0",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BEL",
      symbol: "BEL",
    },
    erc20Info: {
      sudtScriptArgs: "0xbceed8fd2b30c9e246035890196fed4218e5bff472786f74c19d9b156607070b",
      ethAddress: "0xCBc38125D93EF2d1D57f2f53c24B3174788Af22B",
    },
  },
  {
    info: {
      decimals: 18,
      name: "PAX",
      symbol: "PAX",
    },
    erc20Info: {
      sudtScriptArgs: "0x160093179296127b43624ab641e2561540e18b1f1b8025d8d6830485201a16a1",
      ethAddress: "0xdd17d1d65B105F095e7b3081A2787AAf27087e74",
    },
  },
  {
    info: {
      decimals: 6,
      name: "USDC",
      symbol: "USDC",
    },
    erc20Info: {
      sudtScriptArgs: "0x5c4ac961a2428137f27271cf2af205e5c55156d26d9ac285ed3170e8c4cc1501",
      ethAddress: "0x186181e225dc1Ad85a4A94164232bD261e351C33",
    },
  },
  {
    info: {
      decimals: 18,
      name: "SXP",
      symbol: "SXP",
    },
    erc20Info: {
      sudtScriptArgs: "0xf49a7d57cd50907d28c0e2ae57b559165ce08aa0ff074fb3b277f6dc5eb285ee",
      ethAddress: "0xaa4f42d951463cd30669786048B574b94531dCa7",
    },
  },
  {
    info: {
      decimals: 18,
      name: "SUSHI",
      symbol: "SUSHI",
    },
    erc20Info: {
      sudtScriptArgs: "0xd7a79519d220983c703fd90083c481fc3144daad7ea05728832cbc021f27c017",
      ethAddress: "0xCb81168B5dEE2C867faaF200eceee68E7e4e8ae9",
    },
  },
  {
    info: {
      decimals: 18,
      name: "AAVE",
      symbol: "AAVE",
    },
    erc20Info: {
      sudtScriptArgs: "0xaf47fbc88c924f720fd8d4c0aea5dca8bd00ceecd9f8c2ab45415f6a5dd2ee97",
      ethAddress: "0x04A20e9AbB87234d97FF4181C94779A69Df47ED8",
    },
  },
  {
    info: {
      decimals: 18,
      name: "1INCH",
      symbol: "1INCH",
    },
    erc20Info: {
      sudtScriptArgs: "0x5bea7b77283ac8a20bd4e848a67c68349a3880b67278a5565bbbc242a26d3e29",
      ethAddress: "0x76b9C79670462D76909C4b186511570eA4c7E7Fc",
    },
  },
  {
    info: {
      decimals: 8,
      name: "LTO",
      symbol: "LTO",
    },
    erc20Info: {
      sudtScriptArgs: "0x33e2afa67434322b1368bf5064b31dc20021bcccc871aa5cc6a5380aa58c59f6",
      ethAddress: "0x219a4b398b6645C7109fCC761C7642c2B623aA12",
    },
  },
  {
    info: {
      decimals: 18,
      name: "MATIC",
      symbol: "MATIC",
    },
    erc20Info: {
      sudtScriptArgs: "0xb571d967797059352785a0297b3ff740f17df1b97315c311b2c0e0107a0db5a8",
      ethAddress: "0xa3814933184Eb4dA1F63AA7435Dc84ded84B2b3D",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BNT",
      symbol: "BNT",
    },
    erc20Info: {
      sudtScriptArgs: "0x4192873b0a0aaeaa04372aa46ff2cd94a90ac1acaa7569458226febec4d6d5ed",
      ethAddress: "0xF31EAC47575A2Fc20cE659C5d37C71e0D037f7a5",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BZRX",
      symbol: "BZRX",
    },
    erc20Info: {
      sudtScriptArgs: "0xc0ddc82e1a24ccdf637bf19424dfcaa79ccb0dd7bdb1f4fdc7be3457214aee44",
      ethAddress: "0xc4BD582f0f432105E2a5527eCc3863E90e2f5B45",
    },
  },
  {
    info: {
      decimals: 18,
      name: "MDT",
      symbol: "MDT",
    },
    erc20Info: {
      sudtScriptArgs: "0xe5738a780a759d2f7a1a4b33999d1a7e05d55e0a88efb6068a963aa84531fdbc",
      ethAddress: "0xd8e8EAB05685A37b9a4F0a928330905F055fb2f9",
    },
  },
  {
    info: {
      decimals: 18,
      name: "PNT",
      symbol: "PNT",
    },
    erc20Info: {
      sudtScriptArgs: "0xbdfe9436470e847122230ec5119eed76ace9a99cca1db628cf8d42d334cc16f5",
      ethAddress: "0x068788f3CF359e4C7261247d416feeE1D77b8D42",
    },
  },
  {
    info: {
      decimals: 18,
      name: "PERL",
      symbol: "PERL",
    },
    erc20Info: {
      sudtScriptArgs: "0x34ae46f1112be6a0f3d17bdf34d64e8508c4e6a6c23ae352d0915e24ac767224",
      ethAddress: "0xbd5455c47Ed36F3AAaAC92e69e80cb4a94F18531",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BAL",
      symbol: "BAL",
    },
    erc20Info: {
      sudtScriptArgs: "0xcce6d0ac83d2491f8b8bd3875f3577b9e77f08a0396cd2e9274f339eb76e08a4",
      ethAddress: "0x4Db44441DE517d8B43b52cf2C4d86f74fa06C5b0",
    },
  },
  {
    info: {
      decimals: 18,
      name: "BLZ",
      symbol: "BLZ",
    },
    erc20Info: {
      sudtScriptArgs: "0xda58dca6d334b837dbeb1da27e3ee45039890555bbcadbbd59fa1f32faaa5d5b",
      ethAddress: "0x83C16aAC89CDA0666CC161b81d848B41A091450D",
    },
  },
  {
    info: {
      decimals: 18,
      name: "COTI",
      symbol: "COTI",
    },
    erc20Info: {
      sudtScriptArgs: "0x70746eb3aeeefb93c7024332e3b129ac09dbdfd238e9a0ff7763ae1b2cd8193e",
      ethAddress: "0x6bA03AA5221C60c7Fb8F97bF932D0311Bb625d3C",
    },
  },
  {
    info: {
      decimals: 6,
      name: "TRX",
      symbol: "TRX",
    },
    erc20Info: {
      sudtScriptArgs: "0xff7eb7296b2e6896274c37bdf949442f8cbb3f89f60d21d39367e2c93d917ad9",
      ethAddress: "0xE462Cc529C3BE3aA95d8CDD3D645e18F8AF60B2f",
    },
  },
  {
    info: {
      decimals: 18,
      name: "TUSD",
      symbol: "TUSD",
    },
    erc20Info: {
      sudtScriptArgs: "0xeb83e2d417474fb5aeaf3ab13be413e445159ade6865bd28834c34f680b9339a",
      ethAddress: "0x9eD1bABcafC2bB19F39994b13D92B0E8e05B28E1",
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
      ethAddress: "0xBAdb9b25150Ee75bb794198658A4D0448e43E528",
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
      ethAddress: "0xD07920d57F400D89d62535D50eb9D1200ed7821B",
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
      ethAddress: "0xDFF2faCdFe47C1D5b51f18231f900949F1d5988f",
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
      ethAddress: "0x815fd64f16C522becD816d858ddE5f337f68A1e6",
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
      ethAddress: "0xEF2439e020509259FA603c34B35A81FFe676CFB4",
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
      ethAddress: "0x6845Aa96145d6F9E322188B7c76d86f72111490b",
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
      ethAddress: "0xfA307CfdEA89DC197A346c338a98aC85d517af6e",
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
      ethAddress: "0x737914Fa11b269b40367337925FD9FcDc8272C64",
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
      ethAddress: "0xDF27EC8D1f6f91a89feD8FD5F131523bD62F35B9",
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
      ethAddress: "0x82455018F2c32943b3f12F4e59D0DA2FAf2257Ef",
    },
  },
];
