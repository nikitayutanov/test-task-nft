import { useAccount } from '@gear-js/react-hooks';
import { NFTTokenMetadataResponse, NFTTokenState } from 'entities/nft-token';
import { useNFTState } from 'hooks/api';
import { useMemo } from 'react';
import { Stub } from 'components/layout/stub/Stub';
import styles from './List.module.scss';

type Props = {
  title?: string;
  actionSlot?: React.ReactNode;
  renderItem: (metadata: NFTTokenMetadataResponse, transactionId: number) => React.ReactNode;
};

function NFTTokenList({ title, actionSlot, renderItem }: Props) {
  const { state } = useNFTState<NFTTokenState>();
  const { account } = useAccount();

  const sortedTokens = useMemo(
    () =>
      state?.tokens
        .filter((token) => token[1].owner === account?.decodedAddress)
        .sort(([firstId], [secondId]) => secondId - firstId) || [],
    [state?.tokens, account?.decodedAddress],
  );

  const isShowStub = state && !sortedTokens.length;

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {actionSlot}
      </div>

      {isShowStub ? (
        <Stub title="There are no your NFT tokens yet" subtitle="Lets create a new one">
          {actionSlot}
        </Stub>
      ) : (
        sortedTokens.map(([transactionId, metadata]) => renderItem(metadata, transactionId))
      )}
    </div>
  );
}

export { NFTTokenList };
