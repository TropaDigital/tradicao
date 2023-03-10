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
import { useRef, useState } from 'react';
import * as S from './styles';
import { IHeaderOptions, IInfoOptions } from './types';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [oldScroll, setOldScroll] = useState<any>();
  const [showHeader, setShowHeader] = useState<boolean>(false);
  const [isSubMenuTradicaoOpen, setIsSubMenuTradicaoOpen] =
    useState<boolean>(false);
  const [isSubMenuConsorcioOpen, setIsSubMenuConsorcioOpen] =
    useState<boolean>(false);

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
          path: '/compliance'
        },
        {
          subTitle: 'Atendimento',
          path: '/atendimento'
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

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsMobileOpen);
  useOutsideAlerter(wrapperRef, setIsSubMenuConsorcioOpen);
  useOutsideAlerter(wrapperRef, setIsSubMenuTradicaoOpen);

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
                key={info.text}
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


          {/* TODO: fix wrapperRef mobileMenu */}
        <div
          className="menu-container"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <S.MenuHamburgerContainer
            isOpen={isMobileOpen}
          ></S.MenuHamburgerContainer>
          <S.MobileMenuModal isOpen={isMobileOpen}>
            {mainPages.map((page) => {
              return (
                <>
                  <Link
                    href={page.path ? page.path : ''}
                    key={page.title}
                    className="mobile-option"
                    onClick={() => {
                      if(page.title === "A Tradição") {
                        setIsSubMenuTradicaoOpen(!isSubMenuTradicaoOpen)
                      }else if(page.title === "O Consórcio") {
                        setIsSubMenuConsorcioOpen(!isSubMenuConsorcioOpen)
                      }
                    }}
                  >
                    {page.title}
                    <span>{page.subOptions && <ChevronIcon />}</span>
                  </Link>

                  {page.subOptions && (
                    <S.SubMobileMenu
                      isOpen={
                        page.title === 'A Tradição'
                          ? isSubMenuTradicaoOpen
                          : isSubMenuConsorcioOpen
                      }
                    >
                      {page.subOptions?.map((subOption) => (
                        <Link href={subOption.path}>{subOption.subTitle}</Link>
                      ))}
                    </S.SubMobileMenu>
                  )}
                </>
              );
            })}
          </S.MobileMenuModal>
        </div>

        <S.HeaderNav>
          <ul className="header-options">
            {mainPages.map((page) => {
              return (
                <>
                  {page.title === 'Área do Cliente' ? (
                    <li>
                      <Button
                        radius="rounded"
                        icon={<PersonIcon color={'var(--white)'} />}
                        key={page.title}
                      >
                        Área do Cliente
                      </Button>
                    </li>
                  ) : page.subOptions ? (
                    <li className="submenu-options">
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
                        wrapperRef={wrapperRef}
                      >
                        {page.subOptions.map((subOption) => (
                          <Link href={subOption.path} key={subOption.subTitle}>
                            {subOption.subTitle}
                          </Link>
                        ))}
                      </S.SubMenuOptions>
                    </li>
                  ) : (
                    <li>
                      <Link
                        href={page.path ? page?.path : '/'}
                        key={page.path}
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
      </S.HeaderContainer>
    </>
  );
};

export default Header;
