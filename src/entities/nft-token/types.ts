export type NFTTokenMetadata = {
  name: string;
  description: string;
  media: string;
  reference: string;
};

// TODO: make generic for messages
export type NFTTokenMessageMetadata = {
  Mint: {
    transaction_id: number;
    token_metadata: NFTTokenMetadata;
  };
};
