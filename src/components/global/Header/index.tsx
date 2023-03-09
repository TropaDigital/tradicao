import {
  DefaultLogo,
  JornalIcon,
  PersonIcon,
  PhoneIcon,
  SuitCaseIcon,
  UniversityIcon
} from '@/assets/icons';
import Button from '@/components/UI/Button';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import Link from 'next/link';
import { useRef, useState } from 'react';
import * as S from './styles';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [oldScroll, setOldScroll] = useState<any>();
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const mainPages = [
    'Início',
    'A Tradição',
    'O Consórcio',
    'Trabalhe Conosco',
    'Unidades',
    'Contato',
    'Área do Cliente'
  ];

  const infoLinks = [
    {
      icon: <PhoneIcon />,
      link: 'tel: 40035090',
      text: 'Televendas: 4003-5090'
    },
    {
      icon: <JornalIcon />,
      link: '/',
      text: 'Blog'
    },
    {
      icon: <UniversityIcon />,
      link: '/',
      text: 'Universidade'
    },
    {
      icon: <SuitCaseIcon />,
      link: '/',
      text: 'Área do Representante'
    }
  ];

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsMobileOpen);

  window.onscroll = function (e) {
    setOldScroll(window.scrollY);
    if (oldScroll > window.scrollY) {
      setShowHeader(false);
    } else {
      if (window?.scrollY > 300) {
        setShowHeader(true);
      }
    }
  };

  return (
    <>
      <S.InfoContainer showHeader={showHeader}>
        <ul>
          {infoLinks.map((info) => {
            return (
              <li
                className={info.text
                  .trim()
                  .replaceAll(' ', '-')
                  .replace(/[0-9]/g, '')
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')}
              >
                <Link href={info.link}>
                  {info.icon}
                  {info.text}
                </Link>
              </li>
            );
          })}
          <li>
            <S.BoletoButton href="/">2ª via de boleto</S.BoletoButton>
          </li>
        </ul>
      </S.InfoContainer>

      <S.HeaderContainer showHeader={showHeader}>
        <div className="logo">
          <DefaultLogo width={262} height={77} />
        </div>

        <div
          className="menu-container"
          ref={wrapperRef}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <S.MenuHamburgerContainer
            isOpen={isMobileOpen}
          ></S.MenuHamburgerContainer>
          <S.MobileMenuModal options={mainPages} isOpen={isMobileOpen} />
        </div>

        <S.HeaderNav>
          <ul>
            {mainPages.map((page) => {
              return (
                <>
                  {page !== 'Área do Cliente' ? (
                    <li>
                      <Link href="/" key={page}>
                        {page}
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Button
                        radius="rounded"
                        icon={<PersonIcon color={'var(--white)'} />}
                        key={page}
                      >
                        Área do Cliente
                      </Button>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </S.HeaderNav>
      </S.HeaderContainer>
    </>
  );
};

export default Header;
