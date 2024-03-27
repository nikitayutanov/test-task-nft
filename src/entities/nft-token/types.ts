export type NFTTokenMetadataRequest = {
  name: string;
  description: string;
  media: string;
  reference: string;
};

export type NFTTokenMetadataResponse = {
  name: string;
  description: string;
  mediaUrl: string;
  attribUrl: string;
};

export type MintTokenPayload<T> = {
  Mint: {
    transaction_id: number;
    token_metadata: T;
  };
};

export type Token<T> = [number, { owner: string } & T];

export type TokenState<T> = {
  tokens: Token<T>[];
  collection: {
    name: string;
    description: string;
  };
  // TODO: specify additional fields if required
};

export type NFTTokenState = TokenState<NFTTokenMetadataResponse>;
