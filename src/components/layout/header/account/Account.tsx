import { useState } from 'react';
import { useAccount, useBalance } from '@gear-js/react-hooks';
import { ReactComponent as userSVG } from 'assets/images/icons/login.svg';
import { Button } from '@gear-js/ui';
import { AccountsModal } from './accounts-modal';
import { Wallet } from './wallet';

function Account() {
  const { account, accounts } = useAccount();
  const { balance } = useBalance(account?.address);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {account ? (
        <Wallet balance={balance} address={account.address} name={account.meta.name} onClick={openModal} />
      ) : (
        <Button icon={userSVG} text="Sign in" onClick={openModal} />
      )}
      {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}
    </>
  );
}

export { Account };
