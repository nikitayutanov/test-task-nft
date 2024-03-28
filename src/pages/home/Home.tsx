import { useAccount } from '@gear-js/react-hooks';
import { NFTTokenList, NFTTokenItem } from 'entities/nft-token';
import { CreateNFTToken } from 'features/create-nft-token';

function Home() {
  const { account } = useAccount();
  const isLogged = Boolean(account);

  return isLogged ? (
    <NFTTokenList
      title="Your NFT tokens"
      actionSlot={<CreateNFTToken />}
      renderItem={(metadata, transactionId) => <NFTTokenItem metadata={metadata} key={transactionId} />}
    />
  ) : (
    <h2>Please, login to create your NFT tokens</h2>
  );
}

export { Home };
