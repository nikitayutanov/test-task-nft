import { Input, Textarea, InputWrapper } from '@gear-js/ui';
import { useReferenceAttributes } from 'hooks/useReferenceAttributes';
import { NFTTokenMetadataResponse } from '../types';
import styles from './Item.module.scss';

type Props = {
  metadata: NFTTokenMetadataResponse;
};

function NFTTokenItem({ metadata }: Props) {
  const attributes = useReferenceAttributes(metadata.attribUrl);

  return (
    <div className={styles.wrapper}>
      <Input label="Name" value={metadata.name} readOnly className={styles.formItem} gap="1/6" />
      <Input label="Description" value={metadata.description} readOnly className={styles.formItem} gap="1/6" />
      <InputWrapper size="normal" direction="x" id="_empty" label="Image" gap="1/6">
        <img src={metadata.mediaUrl} alt={metadata.name} className={styles.image} />
      </InputWrapper>
      {attributes && <Textarea label="Attributes" value={JSON.stringify(attributes, null, 4)} readOnly gap="1/6" />}
    </div>
  );
}

export { NFTTokenItem };
