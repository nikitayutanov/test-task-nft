import { useEffect, useState } from 'react';
import { useAlert } from '@gear-js/react-hooks';

function useReferenceAttributes<T extends Object>(source?: string) {
  const [attributes, setAttributes] = useState<T | null>(null);
  const alert = useAlert();

  useEffect(() => {
    if (source) {
      fetch(source)
        .then((res) => res.json())
        .then((attr) => setAttributes(attr))
        .catch((error) => {
          alert.error(`Unable to load attributes from ${source}`, error);
          setAttributes(null);
        });
    } else {
      setAttributes(null);
    }
  }, [source, alert]);

  return attributes;
}

export { useReferenceAttributes };
