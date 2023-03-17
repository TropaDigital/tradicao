import {
  ChevronIcon,
  DefaultLogo,
  JornalIcon,
  PersonIcon,
  PhoneIcon,
  SuitCaseIcon,
  UniversityIcon
} from '@/assets/icons';
import Button from '@/components/UI/Button';
import Modal from '@/components/UI/Modal';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IHeaderOptions, IInfoOptions } from './types';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isSubMenuTradicaoOpen, setIsSubMenuTradicaoOpen] =
    useState<boolean>(false);
  const [isSubMenuConsorcioOpen, setIsSubMenuConsorcioOpen] =
    useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>();

  const mainPages: IHeaderOptions[] = [
    {
      title: 'Início',
      path: '/'
    },
    {
      title: 'A Tradição',
      subOptions: [
        {
          subTitle: 'Quem somos',
          path: '/quem-somos'
        },
        {
          subTitle: 'Demonstrações Financeiras',
          path: '/demonstracoes-financeiras'
        },
        {
          subTitle: 'Compliance',
          path: '/canal-de-denuncia'
        },
        {
          subTitle: 'Atendimento',
          path: '/contato'
        }
      ]
    },
    {
      title: 'O Consórcio',
      subOptions: [
        {
          subTitle: 'Automóveis',
          path: '/automoveis'
        },
        {
          subTitle: 'Imóveis',
          path: '/imoveis'
        },
        {
          subTitle: 'Pesados',
          path: '/pesados'
        },
        {
          subTitle: 'Regulamento',
          path: '/regulamento'
        }
      ]
    },
    {
      title: 'Trabalhe Conosco',
      path: '/trabalhe-conosco'
    },
    {
      title: 'Unidades',
      path: '/unidades'
    },
    {
      title: 'Contato',
      path: '/contato'
    },
    {
      title: 'Área do Cliente',
      path: '/'
    }
  ];

  const infoLinks: IInfoOptions[] = [
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

  const getWindowWidth = () => {
    window.addEventListener('resize', () => {
      setWindowWidth(window?.innerWidth);
    });
  };

  getWindowWidth();

  const wrapperRef = useRef(null);
  const tradicaoWrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsMobileOpen);
  useOutsideAlerter(wrapperRef, setIsSubMenuConsorcioOpen);
  useOutsideAlerter(tradicaoWrapperRef, setIsSubMenuTradicaoOpen);

  return (
    <>
      <S.InfoContainer>
        <ul>
          {infoLinks.map((info, key) => {
            return (
              <li
                className={info.text
                  .trim()
                  .replaceAll(' ', '-')
                  .replace(/[0-9]/g, '')
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')}
                key={key}
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

      <S.HeaderContainer>
        <div className="logo">
          <DefaultLogo width={262} height={77} />
        </div>

        {windowWidth && windowWidth <= 1340 ? (
          <div className="menu-container">
            <S.MenuHamburgerContainer
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            ></S.MenuHamburgerContainer>
            <S.MobileMenuModal isOpen={isMobileOpen} ref={wrapperRef}>
              {mainPages.map((page, key) => {
                return (
                  <>
                    <Link
                      href={page.path ? page.path : ''}
                      key={key}
                      className="mobile-option"
                      onClick={() => {
                        if (page.title === 'A Tradição') {
                          setIsSubMenuTradicaoOpen(!isSubMenuTradicaoOpen);
                        } else if (page.title === 'O Consórcio') {
                          setIsSubMenuConsorcioOpen(!isSubMenuConsorcioOpen);
                        }
                      }}
                    >
                      {page.title}
                      <span className="chevron-icon">
                        {page.subOptions && <ChevronIcon />}
                      </span>
                    </Link>

                    {page.subOptions && (
                      <S.SubMobileMenu
                        isOpen={
                          page.title === 'A Tradição'
                            ? isSubMenuTradicaoOpen
                            : isSubMenuConsorcioOpen
                        }
                      >
                        {page.subOptions?.map((subOption, keyOption) => (
                          <Link
                            key={keyOption}
                            href={subOption.path}
                            className="sub-submobile-option"
                          >
                            {subOption.subTitle}
                          </Link>
                        ))}
                      </S.SubMobileMenu>
                    )}
                  </>
                );
              })}
            </S.MobileMenuModal>
          </div>
        ) : (
          <S.HeaderNav>
            <ul className="header-options">
              {mainPages.map((page, key) => {
                return (
                  <>
                    {page.title === 'Área do Cliente' ? (
                      <li key={key}>
                        <Button
                          radius="rounded"
                          icon={<PersonIcon color={'var(--white)'} />}
                          className="client-area-button"
                        >
                          Área do Cliente
                        </Button>
                      </li>
                    ) : page.subOptions ? (
                      <li key={key} className="submenu-options">
                        <div
                          className="option-title"
                          onClick={() => {
                            page.title === 'A Tradição'
                              ? setIsSubMenuTradicaoOpen(!isSubMenuTradicaoOpen)
                              : setIsSubMenuConsorcioOpen(
                                  !isSubMenuConsorcioOpen
                                );
                          }}
                        >
                          {page.title}
                        </div>

                        <S.SubMenuOptions
                          isOpen={
                            page.title === 'A Tradição'
                              ? isSubMenuTradicaoOpen
                              : isSubMenuConsorcioOpen
                          }
                        >
                          <div
                            ref={
                              page.title === 'A Tradição'
                                ? tradicaoWrapperRef
                                : wrapperRef
                            }
                            className="sub-menu-container"
                          >
                            {page.subOptions.map((subOption, keyOption) => (
                              <Link href={subOption.path} key={keyOption}>
                                {subOption.subTitle}
                              </Link>
                            ))}
                          </div>
                        </S.SubMenuOptions>
                      </li>
                    ) : (
                      <li key={key}>
                        <Link
                          href={page.path ? page?.path : '/'}
                          className="option-title"
                        >
                          {page.title}
                        </Link>
                      </li>
                    )}
                  </>
                );
              })}
            </ul>
          </S.HeaderNav>
        )}
      </S.HeaderContainer>
    </>
  );
};

export default Header;
