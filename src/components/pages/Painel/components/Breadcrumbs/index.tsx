import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from './styles';
import { HouseIcon } from '@/src/assets/icons';

export default function Breadcrumbs() {
  const [pathnameRoute, setPathnameRoute] = useState<Array<string>>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      handlePathname(pathname);
    }
  }, [pathname]);

  function handlePathname(pathname: string) {
    let route = pathname.split('/');
    setPathnameRoute(route);
  }
  return (
    <Container>
      <HouseIcon />
      {pathnameRoute?.map((row: string, key: number) => (
        <span key={key}>
          {row && <p>/</p>}
          <p className={key == pathnameRoute.length - 1 ? 'darkLetter' : ''}>
            {row}
          </p>
        </span>
      ))}
    </Container>
  );
}
