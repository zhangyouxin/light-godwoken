import { LightGodwokenTokenType } from "./configTypes";

// https://raw.githubusercontent.com/nervosnetwork/godwoken-info/rfc-uan/mainnet_v1/bridged-token-list.json
//  UAN: https://raw.githubusercontent.com/nervosnetwork/force-bridge/20f25902d2f86e54585881b53c62a5ec42da5e1a/configs/uan-token-list.json
export const TOKEN_LIST_V1_MAINNET: LightGodwokenTokenType[] = [
  {
    id: 0,
    symbol: "dCKB",
    name: "dCKB",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/nervos-network-ckb-logo.svg?v=002",
    address: "0x893474456C475E738b13DdA824979bF7a355DE39",
    l1LockArgs: "0xe5451c05231e1df43e4b199b5d12dbed820dfbea2769943bb593f874526eeb55",
    layer1UAN: "YOK.ckb",
    layer2UAN: "YOK.gw|gb.ckb",
  },
  {
    id: 0,
    symbol: "TAI",
    name: "TAI",
    decimals: 8,
    tokenURI: "",
    address: "0x291c64443c15E0632B2c4C742CB2b4b49CA36993",
    l1LockArgs: "0x08430183dda1cbd81912c4762a3006a59e2291d5bd43b48bb7fa7544cace9e4a",
    layer1UAN: "TAI.ckb",
    layer2UAN: "TAI.gw|gb.ckb",
  },
  {
    id: 0,
    symbol: "ETH",
    name: "ETH",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    address: "0x9E858A7aAEDf9FDB1026Ab1f77f627be2791e98A",
    l1LockArgs: "0x9657b32fcdc463e13ec9205914fd91c443822a949937ae94add9869e7f2e1de8",
    layer1UAN: "ETH.ckb|fb.eth",
    layer2UAN: "ETH.gw|gb.ckb|fb.eth",
    layer1DisplayName: "ETH (via Forcebridge from ETH)",
    layer2DisplayName: "ETH (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "USDT",
    name: "USDT",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
    address: "0x8E019acb11C7d17c26D334901fA2ac41C1f44d50",
    l1LockArgs: "0x1b89ae72b96c4f02fa7667ab46febcedf9b495737752176303ddd215d66a615a",
    layer1UAN: "USDT.ckb|fb.eth",
    layer2UAN: "USDT.gw|gb.ckb|fb.eth",
    layer1DisplayName: "USDT (via Forcebridge from ETH)",
    layer2DisplayName: "USDT (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "DAI",
    name: "DAI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.svg?v=002",
    address: "0x2c9Fc6087875646112f66a3C92fEF2d158FAa76e",
    l1LockArgs: "0xdd97fe4f673ed231af188855f4ca8b1034153c8d4e40f5b4fae2afd5d3f53ccc",
    layer1UAN: "DAI.ckb|fb.eth",
    layer2UAN: "DAI.gw|gb.ckb|fb.eth",
    layer1DisplayName: "DAI (via Forcebridge from ETH)",
    layer2DisplayName: "DAI (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "LINK",
    name: "LINK",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=002",
    address: "0x81206A83Df57cA79DbF1371Ffdd9CEd1cafA5E17",
    l1LockArgs: "0xb4f59ca5a3e1b8bdbce38ca8742bcd922c2201d61090cddd4a053b3f786e3275",
    layer1UAN: "LINK.ckb|fb.eth",
    layer2UAN: "LINK.gw|gb.ckb|fb.eth",
    layer1DisplayName: "LINK (via Forcebridge from ETH)",
    layer2DisplayName: "LINK (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BAND",
    name: "BAND",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/band-protocol-band-logo.svg?v=013",
    address: "0x0ca34998bf143D0b1055A89276Ca51c6bD6eDa2D",
    l1LockArgs: "0xf7d2b6a5e6c9ec564ce11e30e845d7e4ed9fd873eb3a426e9991d4a780d7c35b",
    layer1UAN: "BAND.ckb|fb.eth",
    layer2UAN: "BAND.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BAND (via Forcebridge from ETH)",
    layer2DisplayName: "BAND (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BAT",
    name: "BAT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/basic-attention-token-bat-logo.svg?v=002",
    address: "0x153b7608FA00E3dBeaa7568B5D34F614eBdc557d",
    l1LockArgs: "0xe183387147be24ecb3ba04eb480b6042803b1c93954f9c5a0e5a506cd5571b6b",
    layer1UAN: "BAT.ckb|fb.eth",
    layer2UAN: "BAT.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BAT (via Forcebridge from ETH)",
    layer2DisplayName: "BAT (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "SNX",
    name: "SNX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/synthetix-network-token-snx-logo.svg?v=002",
    address: "0xB5Eff33b4D4ce65271d6263b2d03E328495a90D9",
    l1LockArgs: "0xb31800b3c908eaf217a982cb2a0fb8df7ac047485c432634a079a8c158339020",
    layer1UAN: "SNX.ckb|fb.eth",
    layer2UAN: "SNX.gw|gb.ckb|fb.eth",
    layer1DisplayName: "SNX (via Forcebridge from ETH)",
    layer2DisplayName: "SNX (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "UNI",
    name: "UNI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=013",
    address: "0x5b99513a6c7F1c81536B4b59EEeA1514FFE142C7",
    l1LockArgs: "0xb52927f7f444eb178461d0fa8b62b67c4a043add18e36248c7e9734d8d077a7e",
    layer1UAN: "UNI.ckb|fb.eth",
    layer2UAN: "UNI.gw|gb.ckb|fb.eth",
    layer1DisplayName: "UNI (via Forcebridge from ETH)",
    layer2DisplayName: "UNI (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "YFI",
    name: "YFI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/yearn-finance-yfi-logo.svg?v=013",
    address: "0x49e1fd3e91dD9642c030B71d01507E55f667ea79",
    l1LockArgs: "0x7658a43a8ae5f3f9d24c2001815617a31c29a4131bf2d2a67a4006f553116e11",
    layer1UAN: "YFI.ckb|fb.eth",
    layer2UAN: "YFI.gw|gb.ckb|fb.eth",
    layer1DisplayName: "YFI (via Forcebridge from ETH)",
    layer2DisplayName: "YFI (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BUSD",
    name: "BUSD",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=002",
    address: "0x9dC5014998b6A7351d75D731263199D31feb4474",
    l1LockArgs: "0x232678824938dfd87a049122c4e244af88dad7faa79a262362f5bc5356ee4c64",
    layer1UAN: "BUSD.ckb|fb.eth",
    layer2UAN: "BUSD.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BUSD (via Forcebridge from ETH)",
    layer2DisplayName: "BUSD (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "COMP",
    name: "COMP",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/compound-comp-logo.svg?v=013",
    address: "0xD56b1007CBf17452DD5Fa65b2d5ee0F70ef11D47",
    l1LockArgs: "0x82a6b63b13d9980c98b17810eb2599dc94c144c0ddd24fd24e8a7881d93323ff",
    layer1UAN: "COMP.ckb|fb.eth",
    layer2UAN: "COMP.gw|gb.ckb|fb.eth",
    layer1DisplayName: "COMP (via Forcebridge from ETH)",
    layer2DisplayName: "COMP (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "MKR",
    name: "MKR",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/maker-mkr-logo.svg?v=002",
    address: "0x32e1682D2d512cEface2ccd180e6682C851c24A8",
    l1LockArgs: "0xbfe64426d24c81113125b33d092655913c8c759e475403a418f4eab47f405dd9",
    layer1UAN: "MKR.ckb|fb.eth",
    layer2UAN: "MKR.gw|gb.ckb|fb.eth",
    layer1DisplayName: "MKR (via Forcebridge from ETH)",
    layer2DisplayName: "MKR (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "IOTX",
    name: "IOTX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/iotex-iotx-logo.svg?v=002",
    address: "0x2A800F1e488988d3B6e4a2BE24f6A17058af3eB0",
    l1LockArgs: "0x8049b09170892d1b04b24c9c185704149d915ab29d6640a1c74bf85e823738f5",
    layer1UAN: "IOTX.ckb|fb.eth",
    layer2UAN: "IOTX.gw|gb.ckb|fb.eth",
    layer1DisplayName: "IOTX (via Forcebridge from ETH)",
    layer2DisplayName: "IOTX (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BEL",
    name: "BEL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/belacoin-bela-logo.svg?v=013",
    address: "0xCBc38125D93EF2d1D57f2f53c24B3174788Af22B",
    l1LockArgs: "0xbceed8fd2b30c9e246035890196fed4218e5bff472786f74c19d9b156607070b",
    layer1UAN: "BEL.ckb|fb.eth",
    layer2UAN: "BEL.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BEL (via Forcebridge from ETH)",
    layer2DisplayName: "BEL (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "PAX",
    name: "PAX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/paxos-standard-pax-logo.svg?v=002",
    address: "0xdd17d1d65B105F095e7b3081A2787AAf27087e74",
    l1LockArgs: "0x160093179296127b43624ab641e2561540e18b1f1b8025d8d6830485201a16a1",
    layer1UAN: "USDP.ckb|fb.eth",
    layer2UAN: "USDP.gw|gb.ckb|fb.eth",
    layer1DisplayName: "USDP (via Forcebridge from ETH)",
    layer2DisplayName: "USDP (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "USDC",
    name: "USDC",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
    address: "0x186181e225dc1Ad85a4A94164232bD261e351C33",
    l1LockArgs: "0x5c4ac961a2428137f27271cf2af205e5c55156d26d9ac285ed3170e8c4cc1501",
    layer1UAN: "USDC.ckb|fb.eth",
    layer2UAN: "USDC.gw|gb.ckb|fb.eth",
    layer1DisplayName: "USDC (via Forcebridge from ETH)",
    layer2DisplayName: "USDC (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "SXP",
    name: "SXP",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/swipe-sxp-logo.svg?v=002",
    address: "0xaa4f42d951463cd30669786048B574b94531dCa7",
    l1LockArgs: "0xf49a7d57cd50907d28c0e2ae57b559165ce08aa0ff074fb3b277f6dc5eb285ee",
    layer1UAN: "SXP.ckb|fb.eth",
    layer2UAN: "SXP.gw|gb.ckb|fb.eth",
    layer1DisplayName: "SXP (via Forcebridge from ETH)",
    layer2DisplayName: "SXP (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "SUSHI",
    name: "SUSHI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=013",
    address: "0xCb81168B5dEE2C867faaF200eceee68E7e4e8ae9",
    l1LockArgs: "0xd7a79519d220983c703fd90083c481fc3144daad7ea05728832cbc021f27c017",
    layer1UAN: "SUSHI.ckb|fb.eth",
    layer2UAN: "SUSHI.gw|gb.ckb|fb.eth",
    layer1DisplayName: "SUSHI (via Forcebridge from ETH)",
    layer2DisplayName: "SUSHI (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "AAVE",
    name: "AAVE",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/aave-aave-logo.svg?v=013",
    address: "0x04A20e9AbB87234d97FF4181C94779A69Df47ED8",
    l1LockArgs: "0xaf47fbc88c924f720fd8d4c0aea5dca8bd00ceecd9f8c2ab45415f6a5dd2ee97",
    layer1UAN: "AAVE.ckb|fb.eth",
    layer2UAN: "AAVE.gw|gb.ckb|fb.eth",
    layer1DisplayName: "AAVE (via Forcebridge from ETH)",
    layer2DisplayName: "AAVE (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "1INCH",
    name: "1INCH",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/1inch-1inch-logo.svg?v=013",
    address: "0x76b9C79670462D76909C4b186511570eA4c7E7Fc",
    l1LockArgs: "0x5bea7b77283ac8a20bd4e848a67c68349a3880b67278a5565bbbc242a26d3e29",
    layer1UAN: "1INCH.ckb|fb.eth",
    layer2UAN: "1INCH.gw|gb.ckb|fb.eth",
    layer1DisplayName: "1INCH (via Forcebridge from ETH)",
    layer2DisplayName: "1INCH (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "LTO",
    name: "LTO",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/lto-network-lto-logo.svg?v=002",
    address: "0x219a4b398b6645C7109fCC761C7642c2B623aA12",
    l1LockArgs: "0x33e2afa67434322b1368bf5064b31dc20021bcccc871aa5cc6a5380aa58c59f6",
    layer1UAN: "LTO.ckb|fb.eth",
    layer2UAN: "LTO.gw|gb.ckb|fb.eth",
    layer1DisplayName: "LTO (via Forcebridge from ETH)",
    layer2DisplayName: "LTO (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "MATIC",
    name: "MATIC",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/matic-network-matic-logo.svg?v=002",
    address: "0xa3814933184Eb4dA1F63AA7435Dc84ded84B2b3D",
    l1LockArgs: "0xb571d967797059352785a0297b3ff740f17df1b97315c311b2c0e0107a0db5a8",
    layer1UAN: "MATIC.ckb|fb.eth",
    layer2UAN: "MATIC.gw|gb.ckb|fb.eth",
    layer1DisplayName: "MATIC (via Forcebridge from ETH)",
    layer2DisplayName: "MATIC (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BNT",
    name: "BNT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bancor-bnt-logo.svg?v=002",
    address: "0xF31EAC47575A2Fc20cE659C5d37C71e0D037f7a5",
    l1LockArgs: "0x4192873b0a0aaeaa04372aa46ff2cd94a90ac1acaa7569458226febec4d6d5ed",
    layer1UAN: "BNT.ckb|fb.eth",
    layer2UAN: "BNT.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BNT (via Forcebridge from ETH)",
    layer2DisplayName: "BNT (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BZRX",
    name: "BZRX",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bzx-protocol-bzrx-logo.svg?v=013",
    address: "0xc4BD582f0f432105E2a5527eCc3863E90e2f5B45",
    l1LockArgs: "0xc0ddc82e1a24ccdf637bf19424dfcaa79ccb0dd7bdb1f4fdc7be3457214aee44",
    layer1UAN: "BZRX.ckb|fb.eth",
    layer2UAN: "BZRX.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BZRX (via Forcebridge from ETH)",
    layer2DisplayName: "BZRX (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "MDT",
    name: "MDT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/measurable-data-token-mdt-logo.svg?v=013",
    address: "0xd8e8EAB05685A37b9a4F0a928330905F055fb2f9",
    l1LockArgs: "0xe5738a780a759d2f7a1a4b33999d1a7e05d55e0a88efb6068a963aa84531fdbc",
    layer1UAN: "MDT.ckb|fb.eth",
    layer2UAN: "MDT.gw|gb.ckb|fb.eth",
    layer1DisplayName: "MDT (via Forcebridge from ETH)",
    layer2DisplayName: "MDT (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "PNT",
    name: "PNT",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/pnetwork-pnt-logo.svg?v=013",
    address: "0x068788f3CF359e4C7261247d416feeE1D77b8D42",
    l1LockArgs: "0xbdfe9436470e847122230ec5119eed76ace9a99cca1db628cf8d42d334cc16f5",
    layer1UAN: "PNT.ckb|fb.eth",
    layer2UAN: "PNT.gw|gb.ckb|fb.eth",
    layer1DisplayName: "PNT (via Forcebridge from ETH)",
    layer2DisplayName: "PNT (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "PERL",
    name: "PERL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/perlin-perl-logo.svg?v=002",
    address: "0xbd5455c47Ed36F3AAaAC92e69e80cb4a94F18531",
    l1LockArgs: "0x34ae46f1112be6a0f3d17bdf34d64e8508c4e6a6c23ae352d0915e24ac767224",
    layer1UAN: "PERL.ckb|fb.eth",
    layer2UAN: "PERL.gw|gb.ckb|fb.eth",
    layer1DisplayName: "PERL (via Forcebridge from ETH)",
    layer2DisplayName: "PERL (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BAL",
    name: "BAL",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/balancer-bal-logo.svg?v=013",
    address: "0x4Db44441DE517d8B43b52cf2C4d86f74fa06C5b0",
    l1LockArgs: "0xcce6d0ac83d2491f8b8bd3875f3577b9e77f08a0396cd2e9274f339eb76e08a4",
    layer1UAN: "BAL.ckb|fb.eth",
    layer2UAN: "BAL.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BAL (via Forcebridge from ETH)",
    layer2DisplayName: "BAL (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BLZ",
    name: "BLZ",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bluzelle-blz-logo.svg?v=002",
    address: "0x83C16aAC89CDA0666CC161b81d848B41A091450D",
    l1LockArgs: "0xda58dca6d334b837dbeb1da27e3ee45039890555bbcadbbd59fa1f32faaa5d5b",
    layer1UAN: "BLZ.ckb|fb.eth",
    layer2UAN: "BLZ.gw|gb.ckb|fb.eth",
    layer1DisplayName: "BLZ (via Forcebridge from ETH)",
    layer2DisplayName: "BLZ (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "COTI",
    name: "COTI",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/coti-coti-logo.svg?v=013",
    address: "0x6bA03AA5221C60c7Fb8F97bF932D0311Bb625d3C",
    l1LockArgs: "0x70746eb3aeeefb93c7024332e3b129ac09dbdfd238e9a0ff7763ae1b2cd8193e",
    layer1UAN: "COTI.ckb|fb.eth",
    layer2UAN: "COTI.gw|gb.ckb|fb.eth",
    layer1DisplayName: "COTI (via Forcebridge from ETH)",
    layer2DisplayName: "COTI (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "TRX",
    name: "TRX",
    decimals: 6,
    tokenURI: "https://cryptologos.cc/logos/tron-trx-logo.svg?v=002",
    address: "0xE462Cc529C3BE3aA95d8CDD3D645e18F8AF60B2f",
    l1LockArgs: "0xff7eb7296b2e6896274c37bdf949442f8cbb3f89f60d21d39367e2c93d917ad9",
    layer1UAN: "TRX.ckb|fb.eth",
    layer2UAN: "TRX.gw|gb.ckb|fb.eth",
    layer1DisplayName: "TRX (via Forcebridge from ETH)",
    layer2DisplayName: "TRX (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "TUSD",
    name: "TUSD",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/trueusd-tusd-logo.svg?v=002",
    address: "0x9eD1bABcafC2bB19F39994b13D92B0E8e05B28E1",
    l1LockArgs: "0xeb83e2d417474fb5aeaf3ab13be413e445159ade6865bd28834c34f680b9339a",
    layer1UAN: "TUSD.ckb|fb.eth",
    layer2UAN: "TUSD.gw|gb.ckb|fb.eth",
    layer1DisplayName: "TUSD (via Forcebridge from ETH)",
    layer2DisplayName: "TUSD (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "BNB|bsc",
    name: "Wrapped BNB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002",
    address: "0xBAdb9b25150Ee75bb794198658A4D0448e43E528",
    l1LockArgs: "0x578cd6ab8c0800e6fbc17b58633857dac5626883af89f842e79cb8f7af24de75",
    layer1UAN: "BNB.ckb|fb.bsc",
    layer2UAN: "BNB.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "BNB (via Forcebridge from BSC)",
    layer2DisplayName: "BNB (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "BUSD|bsc",
    name: "Wrapped BUSD (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-usd-busd-logo.svg?v=002",
    address: "0xD07920d57F400D89d62535D50eb9D1200ed7821B",
    l1LockArgs: "0x69c215249102308356778d58259c91c0f1988f6f5b07aa614921ee1803ea0059",
    layer1UAN: "BUSD.ckb|fb.bsc",
    layer2UAN: "BUSD.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "BUSD (via Forcebridge from BSC)",
    layer2DisplayName: "BUSD (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "USDT|bsc",
    name: "Wrapped USDT (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=002",
    address: "0xDFF2faCdFe47C1D5b51f18231f900949F1d5988f",
    l1LockArgs: "0xfd6f1818fe746687ef5268f82ce1835ba1a94fdccee5f098a389aeed0067eb57",
    layer1UAN: "USDT.ckb|fb.bsc",
    layer2UAN: "USDT.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "USDT (via Forcebridge from BSC)",
    layer2DisplayName: "USDT (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "ETH|bsc",
    name: "Wrapped ETH (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=002",
    address: "0x815fd64f16C522becD816d858ddE5f337f68A1e6",
    l1LockArgs: "0xd61ddc3184767d677be0d741883779aa9513293c4eaa4e0687b5b1caf845edfe",
    layer1UAN: "ETH.ckb|fb.bsc",
    layer2UAN: "ETH.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "ETH (via Forcebridge from BSC)",
    layer2DisplayName: "ETH (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "BTCB|bsc",
    name: "Wrapped BTCB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=002",
    address: "0xEF2439e020509259FA603c34B35A81FFe676CFB4",
    l1LockArgs: "0x9ea7beb4a36469e00bb30dbac75e93672441b483d519556ba9d1424b9294eae5",
    layer1UAN: "BTCB.ckb|fb.bsc",
    layer2UAN: "BTCB.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "BTCB (via Forcebridge from BSC)",
    layer2DisplayName: "BTCB (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "WBNB|bsc",
    name: "Wrapped WBNB (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=002",
    address: "0x6845Aa96145d6F9E322188B7c76d86f72111490b",
    l1LockArgs: "0x29f425f897896c15ca11fd154d8e22ac56b5f49e683d0c88979ad44752fcd520",
    layer1UAN: "WBNB.ckb|fb.bsc",
    layer2UAN: "WBNB.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "WBNB (via Forcebridge from BSC)",
    layer2DisplayName: "WBNB (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "USDC|bsc",
    name: "Wrapped USDC (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=002",
    address: "0xfA307CfdEA89DC197A346c338a98aC85d517af6e",
    l1LockArgs: "0xcedd0f67f2d218ab992284ab343c2e729d2a124a1612592deaa9f8b8f8a581dd",
    layer1UAN: "USDC.ckb|fb.bsc",
    layer2UAN: "USDC.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "USDC (via Forcebridge from BSC)",
    layer2DisplayName: "USDC (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "SFP|bsc",
    name: "Wrapped SFP (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://cryptologos.cc/logos/safepal-sfp-logo.svg?v=017",
    address: "0x737914Fa11b269b40367337925FD9FcDc8272C64",
    l1LockArgs: "0xc66b8a7f4869272e1fd0565535cb444c319b6baafd386c5857f08d87e396cfd5",
    layer1UAN: "SFP.ckb|fb.bsc",
    layer2UAN: "SFP.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "SFP (via Forcebridge from BSC)",
    layer2DisplayName: "SFP (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "iBFR|bsc",
    name: "Wrapped iBFR (ForceBridge from BSC)",
    decimals: 18,
    tokenURI: "https://assets.coingecko.com/coins/images/18540/large/buffer.png",
    address: "0xDF27EC8D1f6f91a89feD8FD5F131523bD62F35B9",
    l1LockArgs: "0x5e945aa680b40d9388d4988aee0aebdd2ad9185b6c0ebfd408fa974818de8b6a",
    layer1UAN: "iBFR.ckb|fb.bsc",
    layer2UAN: "iBFR.gw|gb.ckb|fb.bsc",
    layer1DisplayName: "iBFR (via Forcebridge from BSC)",
    layer2DisplayName: "iBFR (via Forcebridge from BSC)",
  },
  {
    id: 0,
    symbol: "WBTC|eth",
    name: "Wrapped WBTC (ForceBridge from Ethereum)",
    decimals: 8,
    tokenURI: "https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.svg?v=002",
    address: "0x82455018F2c32943b3f12F4e59D0DA2FAf2257Ef",
    l1LockArgs: "0x0a2117bce7a84cac80e7c5971919d12987e4da58f79e010c6c2f58c7d6e687e1",
    layer1UAN: "WBTC.ckb|fb.eth",
    layer2UAN: "WBTC.gw|gb.ckb|fb.eth",
    layer1DisplayName: "WBTC (via Forcebridge from ETH)",
    layer2DisplayName: "WBTC (via Forcebridge from ETH)",
  },
  {
    id: 0,
    symbol: "YOK",
    name: "YokaiSwap Token",
    decimals: 18,
    tokenURI: "",
    address: "0x885fb612947ccF1C7611894Bd828D388b046fc24",
    l1LockArgs: "0x656edac5463ef828a1a95f214b56adfe8f37da148fbc7ff424905e5264297c70",
    layer1UAN: "YOK.ckb",
    layer2UAN: "YOK.gw|gb.ckb",
  },
  {
    id: 0,
    symbol: "COOP",
    name: "Cooperative",
    decimals: 18,
    tokenURI: "",
    address: "0x8D5DcCcdE88E2E48e1b91dC58B21AC3248B4E000",
    l1LockArgs: "0x928123cdb74b08e0f058cc1aaa67b5e8fc9c17612061b433716a61e499f7c5f7",
    layer1UAN: "COOP.ckb",
    layer2UAN: "COOP.gw|gb.ckb",
  },
];
