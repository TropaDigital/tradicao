import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export function useScrollDirection() {
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<string | null>(null);
  const [debouncedScrollDir] = useDebounce(scrollDir, 100);

  function detectScrollDirection() {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > scrollPos) {
      setScrollDir('down');
    } else if (currentScrollPos < scrollPos) {
      setScrollDir('up');
    }

    setScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', detectScrollDirection);

    return () => window.removeEventListener('scroll', detectScrollDirection);
  }, [scrollPos]);

  return debouncedScrollDir;
}
