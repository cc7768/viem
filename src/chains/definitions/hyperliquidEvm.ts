// import { defineChain } from '../../utils/chain/defineChain.js'

// TODO: Hyperliquid EVM chose a chain id that conflicts with wanchainTestnet
//       See: https://github.com/ethereum-lists/chains/pull/6840
//       Next steps: https://github.com/wevm/viem/pull/3390#issuecomment-2808052515
// export const hyperliquidEvm = /*#__PURE__*/ defineChain({
//   id: 999,
//   name: 'Hyperliquid EVM',
//   nativeCurrency: { name: 'HYPE', symbol: 'HYPE', decimals: 18 },
//   rpcUrls: {
//     default: {
//       http: ['https://rpc.hyperliquid.xyz/evm'],
//     },
//   },
//   testnet: false,
// })
