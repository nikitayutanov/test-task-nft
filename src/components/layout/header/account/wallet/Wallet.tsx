import { useApi, useBalanceFormat } from '@gear-js/react-hooks';
import { Balance } from '@polkadot/types/interfaces';
import { AccountButton } from '../account-button';
import styles from './Wallet.module.scss';

type Props = {
  balance: Balance | undefined;
  address: string;
  name: string | undefined;
  onClick: () => void;
};

function Wallet({ balance, address, name, onClick }: Props) {
  const { isApiReady } = useApi();
  const { getFormattedBalance } = useBalanceFormat();

  const formattedBalance = isApiReady && balance ? getFormattedBalance(balance) : undefined;

  return (
    <div className={styles.wallet}>
      {formattedBalance && (
        <p className={styles.balance}>
          {formattedBalance.value} <span className={styles.currency}>{formattedBalance.unit}</span>
        </p>
      )}

      <AccountButton address={address} name={name} onClick={onClick} />
    </div>
  );
}

export { Wallet };
