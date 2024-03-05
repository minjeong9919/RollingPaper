import { useEffect } from 'react';

export default function useOutsideClose(reference, setState) {
  useEffect(() => {
    const onOutsideClickHandle = (e) => {
      if (reference.current && !reference.current.contains(e.target)) {
        setState(false);
      }
    };
    document.addEventListener('click', onOutsideClickHandle);
    return () => {
      document.removeEventListener('click', onOutsideClickHandle);
    };
  }, []);
}
