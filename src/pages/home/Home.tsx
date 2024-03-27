import { NFTTokenState } from 'entities/nft-token/types';
import { NFTTokenView } from 'entities/nft-token/view';
import { CreateNFTToken } from 'features/create-nft-token/CreateNFTToken';
import { useNFTState } from 'hooks/api';
import { useMemo } from 'react';
import { Stub } from 'components/layout/stub/Stub';
import styles from './Home.module.scss';

function Home() {
  const { state } = useNFTState<NFTTokenState>();

  const hasTokens = Boolean(state?.tokens.length);
  const sortedTokens = useMemo(
    () =>
      state?.tokens
        .sort(([firstId], [secondId]) => secondId - firstId)
        .map(([transactionId, metadata]) => <NFTTokenView metadata={metadata} key={transactionId} />),
    [state?.tokens],
  );

  const stub = (
    <Stub title="There are no your NFT tokens yet" subtitle="Lets create a new one">
      <CreateNFTToken />
    </Stub>
  );

  return (
    <>
      <div className={styles.wrapper}>
        <h3>Your NFT tokens:</h3>
        <CreateNFTToken />
      </div>

      {/* TODO: move to entities/nft-token/list */}
      {hasTokens ? sortedTokens : stub}
    </>
  );
}

export { Home };
