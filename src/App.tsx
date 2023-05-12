import { usePrepareContractWrite } from 'wagmi'

import dooplicationMarketplaceABI from './abi.json'

export function App() {
  const { config } = usePrepareContractWrite({
    address: '0xBBfb3ae96bF57D8C1Eb1977AE2bf327f7451ff33',
    abi: dooplicationMarketplaceABI,
    functionName: 'cancelListing',
    args: [
      '0xbcae30fd364caddf44237e6e2e70f7962404670e',
      '0x30Ab0Ef8ABD75eD8B29625E047ffDD4Caf78224C',
      1234,
    ],
  })

  return (
    <>
      <h1>wagmi + Vite</h1>
    </>
  )
}
