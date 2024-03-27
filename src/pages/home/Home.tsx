import { NFTTokenForm } from 'entities/nft-token/form/From';
import { NFTTokenMetadata } from 'entities/nft-token/types';
import { NFTTokenView } from 'entities/nft-token/view';
import { useNFTState, useSendNFTMessage } from 'hooks/api';

// TODO: use real user data
const metadata = {
  name: 'test',
  description: 'try to send message',
  media: 'https://placehold.co/600x400/000000/FFF',
  reference: 'https://dummyjson.com/products/1',
};

function Home() {
  const { state } = useNFTState<NFTTokenMetadata>();
  const sendMessage = useSendNFTMessage();

  const onSendMessage: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const payload = {
      mint: {
        transaction_id: 0,
        token_metadata: metadata,
      },
    };

    sendMessage({
      payload,
      gasLimit: 500_000_000_000,
    });
  };

  return (
    <>
      <NFTTokenForm onSubmit={onSendMessage} />
      <NFTTokenView metadata={metadata} />

      <div>{JSON.stringify(state)}</div>
    </>
  );
}

export { Home };
