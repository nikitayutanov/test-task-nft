import { useEffect, useState } from 'react';
import { ProgramMetadata } from '@gear-js/api';

function useProgramMetadata(source: RequestInfo | URL) {
  const [data, setData] = useState<ProgramMetadata>();

  useEffect(() => {
    fetch(source)
      .then((res) => res.text() as Promise<string>)
      .then((raw) => ProgramMetadata.from(`0x${raw}`))
      .then((meta) => setData(meta));
  }, [source]);

  return data;
}

export { useProgramMetadata };
