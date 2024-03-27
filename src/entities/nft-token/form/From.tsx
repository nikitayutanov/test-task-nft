import { Input, Button } from '@gear-js/ui';
import styles from './Form.module.scss';

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

const fieldNames = ['name', 'description', 'media', 'reference'];

function NFTTokenForm({ onSubmit }: Props) {
  return (
    <div>
      <h2>Create your NFT-token here:</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        {fieldNames.map((fieldName) => (
          <Input label={fieldName} name={fieldName} key={fieldName} className={styles.formItem} gap="1/6" />
        ))}
        <Button type="submit" text="Create token" />
      </form>
    </div>
  );
}

export { NFTTokenForm };
