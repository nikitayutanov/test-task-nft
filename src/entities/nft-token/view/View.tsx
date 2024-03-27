import clsx from 'clsx';
import { Input, Textarea, InputWrapper } from '@gear-js/ui';
import { useReferenceAttributes } from 'hooks/useReferenceAttributes';
import { NFTTokenMetadata } from '../types';
import styles from './View.module.scss';

type Props = {
  metadata?: NFTTokenMetadata;
};

function NFTTokenView({ metadata }: Props) {
  const attributes = useReferenceAttributes(metadata?.reference);

  if (!metadata) {
    return (
      <div className={styles.wrapper}>
        <span>Here you will see your NFT token</span>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h3>Your NFT token</h3>
      <Input label="Name" value={metadata.name} readOnly className={styles.formItem} gap="1/6" />
      <Input label="Description" value={metadata.description} readOnly className={styles.formItem} gap="1/6" />
      <InputWrapper size="normal" direction="x" id="_empty" label="Image" gap="1/6">
        <img src={metadata.media} alt={metadata.name} />
      </InputWrapper>
      {attributes && (
        <Textarea
          label="Attributes"
          value={JSON.stringify(attributes, null, 4)}
          readOnly
          className={clsx(styles.formItem, styles.textarea)}
          gap="1/6"
        />
      )}
    </div>
  );
}

export { NFTTokenView };
