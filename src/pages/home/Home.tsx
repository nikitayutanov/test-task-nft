import { NFTTokenList, NFTTokenItem } from 'entities/nft-token';
import { CreateNFTToken } from 'features/create-nft-token';

function Home() {
  return (
    <NFTTokenList
      title="Your NFT tokens"
      actionSlot={<CreateNFTToken />}
      renderItem={(metadata, transactionId) => <NFTTokenItem metadata={metadata} key={transactionId} />}
    />
  );
}

export { Home };
