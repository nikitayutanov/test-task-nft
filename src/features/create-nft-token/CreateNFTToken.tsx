import { Button, Modal } from '@gear-js/ui';
import { NFTTokenForm } from 'entities/nft-token/form/From';
import { MintTokenPayload, NFTTokenMetadataRequest, NFTTokenState } from 'entities/nft-token/types';
import { useNFTState, useSendNFTMessage } from 'hooks/api';
import { useState } from 'react';

const FORM_ID = 'createNftForm';

function CreateNFTToken() {
  const { state } = useNFTState<NFTTokenState>();
  const sendMessage = useSendNFTMessage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSendMessage = (metadata: NFTTokenMetadataRequest) => {
    const nextTransactionId = state?.tokens.length || 0;
    const payload: MintTokenPayload<NFTTokenMetadataRequest> = {
      Mint: {
        transaction_id: nextTransactionId,
        token_metadata: metadata,
      },
    };

    sendMessage({
      payload,
      gasLimit: 500_000_000_000,
      value: 0,
    }).then(() => {
      closeModal();
    });
  };
  return (
    <>
      <Button text="Create new token" onClick={openModal} />
      {isModalOpen && (
        <Modal
          heading="Create new token"
          footer={<Button type="submit" text="Create token" form={FORM_ID} />}
          close={closeModal}
          size="large">
          <NFTTokenForm onSubmit={onSendMessage} formId={FORM_ID} />
        </Modal>
      )}
    </>
  );
}

export { CreateNFTToken };
