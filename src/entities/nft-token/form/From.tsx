import { Input } from '@gear-js/ui';
import { NFTTokenMetadataRequest } from '../types';
import styles from './Form.module.scss';

type Props = {
  onSubmit: (metadata: NFTTokenMetadataRequest) => void;
  formId: string;
};

type Field = { name: keyof NFTTokenMetadataRequest; type?: React.HTMLInputTypeAttribute; label?: string };

const fields: Field[] = [
  { name: 'name' },
  { name: 'description' },
  { name: 'media', type: 'url', label: 'media url' },
  { name: 'reference', type: 'url', label: 'reference url' },
];
const fieldNames = fields.map(({ name }) => name);

function NFTTokenForm({ onSubmit, formId }: Props) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formValues = new FormData(event.currentTarget);

    const metadata = fieldNames.reduce((acc, fieldName) => {
      const value = formValues.get(fieldName);
      if (value && typeof value === 'string') {
        acc[fieldName] = value;
      }
      return acc;
    }, {} as NFTTokenMetadataRequest);

    onSubmit(metadata);
  };

  return (
    <form onSubmit={handleSubmit} id={formId}>
      {fields.map(({ name, label, type }) => (
        <Input
          label={label || name}
          name={name}
          key={name}
          required
          className={styles.formItem}
          type={type}
          gap="2/6"
        />
      ))}
    </form>
  );
}

export { NFTTokenForm };
