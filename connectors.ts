import { NetworkConnector } from '@web3-react/network-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { INFURA_PREFIXES } from './utils'

export function getNetwork(defaultChainId = 1): NetworkConnector {
  return new NetworkConnector({
    urls: [1, 3, 4, 5, 42, 80001, 137, 97].reduce(
      (urls, chainId) =>
        Object.assign(urls, {
          [chainId]:
            chainId === 1 || chainId === 4
              ? `https://${INFURA_PREFIXES[chainId]}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
              : chainId === 80001
              ? `https://rpc-mumbai.matic.today`
              : chainId === 137
              ? `https://rpc-mainnet.matic.today`
              : `https://data-seed-prebsc-1-s1.binance.org:8545/`,
        }),
      {}
    ),
    defaultChainId,
  })
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 80001, 137, 97] })

export const walletconnect = new WalletConnectConnector({
  rpc: {
    1: `https://${INFURA_PREFIXES[1]}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
  },
  bridge: 'https://bridge.walletconnect.org',
})
