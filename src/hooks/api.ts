import metaTxt from 'assets/meta/meta.txt';
import { useReadFullState, useSendMessage } from '@gear-js/react-hooks';
import { ADDRESS } from 'consts';
import { useProgramMetadata } from './useMetadata';

function useNFTMetadata() {
  return useProgramMetadata(metaTxt);
}

function useNFTState<T>() {
  const metadata = useNFTMetadata();

  return useReadFullState<T>(ADDRESS.CONTRACT, metadata, '0x00');
}

function useSendNFTMessage() {
  const meta = useNFTMetadata();

  return useSendMessage(ADDRESS.CONTRACT, meta);
}

export { useNFTState, useSendNFTMessage };
