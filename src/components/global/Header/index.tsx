'use client';

import {
  CalculatorIcon,
  ChevronIcon,
  JornalIcon,
  PersonIcon,
  SuitCaseIcon,
  UniversityIcon
} from '@/assets/icons';
import Button from '@/components/UI/Button';
import { useScrollDirection } from '@/utils/detectScrollDirection';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { IHeaderOptions, IInfoOptions } from './types';

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<any>();
  const [subMenusHeader, setSubMenusHeader] = useState({} as any);

  const scrollDirection = useScrollDirection();
  const pathName = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window?.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setIsMobileOpen(false);
      updateHeaderSubmenusState('');
    }
  }, [scrollDirection]);

  const mainPages: IHeaderOptions[] = [
    {
      title: 'Início',
      path: '/'
    },
    {
      title: 'A Tradição',
      path: '',
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
          path: '/canal-de-comunicacao'
        },
        {
          subTitle: 'Relatórios de Ouvidoria',
          path: '/relatorios-de-ouvidoria'
        }
      ]
    },
    {
      title: 'Consórcio',
      path: '',
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
          subTitle: 'Serviços',
          path: '/servicos'
        },
        {
          subTitle: 'Motos',
          path: '/motos'
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
      path: '',
      subOptions: [
        {
          subTitle: 'Área do Cliente',
          path: '/area-do-cliente'
        },
        {
          subTitle: 'Resultado das Assembleias',
          path: '/resultado-das-assembleias'
        },
        {
          subTitle: 'Recursos não procurados',
          path: '/recursos-nao-procurados'
        },
        {
          subTitle: 'Grupos encerrados',
          path: '/grupos-encerrados'
        }
      ]
    }
  ];

  const infoLinks: IInfoOptions[] = [
    {
      icon: <CalculatorIcon />,
      link: '/',
      text: 'Simular Consórcio'
    },
    {
      icon: <JornalIcon />,
      link: '/blog',
      text: 'Blog'
    },
    {
      icon: <UniversityIcon />,
      link: 'http://universidadetradicao.com.br/',
      text: 'Universidade'
    },
    {
      icon: <SuitCaseIcon />,
      link: 'http://trad.consorciotradicao.com.br:8090/newconplus/',
      text: 'Área do parceiro'
    }
  ];

  const subMenusState: any = {
    'A Tradição': false,
    Consórcio: false,
    'Área do Cliente': false
  };

  function updateHeaderSubmenusState(key: string) {
    for (const prop in subMenusState) {
      if (prop !== key) {
        subMenusState[prop] = false;
      }
    }
    subMenusState[key] = true;

    setSubMenusHeader(subMenusState);
  }

  function handleTargetBlank(link: string) {
    if (link === 'Universidade' || link === 'Área do parceiro') {
      return '_blank';
    }

    return '_self';
  }

  const handlePageChangeMobileMenu = (page: IHeaderOptions) => {
    if (subMenusHeader[page?.title] === true) {
      updateHeaderSubmenusState('');
      return;
    }

    if (page.title === 'A Tradição') {
      updateHeaderSubmenusState('A Tradição');
    } else if (page.title === 'Consórcio') {
      updateHeaderSubmenusState('Consórcio');
    } else if (page.title === 'Área do Cliente') {
      updateHeaderSubmenusState('Área do Cliente');
    }

    if (
      (page.title !== 'A Tradição' &&
        page.title !== 'Consórcio' &&
        page.title !== 'Área do Cliente') ||
      isMobileOpen === false
    ) {
      setIsMobileOpen(false);
    }
  };

  const getWindowWidth = () => {
    if (typeof window !== 'undefined')
      window?.addEventListener('resize', () => {
        setWindowWidth(window?.innerWidth);
      });
  };
  getWindowWidth();

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, setIsMobileOpen);

  function handleMouseEnter() {
    updateHeaderSubmenusState('Área do Cliente');
  }
  function handleMouseLeave() {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      updateHeaderSubmenusState('');
    }, 500); // .5 seg
  }

  function scrollToTop() {
    if (typeof window === 'undefined') return;

    if (pathName === '/') {
      window?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

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
                <Link href={info.link} target={handleTargetBlank(info?.text)}>
                  {info.icon}
                  {info.text}
                </Link>
              </li>
            );
          })}
          <li className="partner-button">
            <S.PartnerButton href="/seja-um-parceiro">
              Seja um Parceiro
            </S.PartnerButton>
          </li>
          <li>
            <S.BoletoButton
              href="https://consorciotradicao.enviodeboleto.com.br/Principal"
              target={'_blank'}
            >
              2ª via de boleto
            </S.BoletoButton>
          </li>
        </ul>
      </S.InfoContainer>

      <S.HeaderContainer className={'nav-' + scrollDirection}>
        <Link href="/">
          <div className="logo" onClick={scrollToTop}>
            <Image
              src="/images/logo-default.png"
              alt="Logo Consórcio Tradição"
              width={262}
              height={77}
            />
          </div>
        </Link>

        {windowWidth && windowWidth <= 1340 ? (
          <div className="menu-container">
            <div
              className="menuHamburguerContainer"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              <S.MenuHamburgerContainer isOpen={isMobileOpen} />
            </div>

            <S.MobileMenuModal isOpen={isMobileOpen} ref={wrapperRef}>
              {mainPages.map((page, key) => {
                return (
                  <React.Fragment key={key}>
                    {page?.path && (
                      <a
                        className="mobile-option"
                        // onClick={() => handlePageChangeMobileMenu(page)}
                        href={page?.path}
                      >
                        {page.title}
                        <span className="chevron-icon">
                          {page.subOptions && <ChevronIcon />}
                        </span>
                      </a>
                    )}

                    {!page?.path && (
                      <p
                        className="mobile-option"
                        onClick={() => handlePageChangeMobileMenu(page)}
                      >
                        {page.title}
                        <span className="chevron-icon">
                          {page.subOptions && <ChevronIcon />}
                        </span>
                      </p>
                    )}

                    {page.subOptions && (
                      <S.SubMobileMenu isOpen={subMenusHeader[page?.title]}>
                        {page.subOptions?.map((subOption, key) => (
                          <Link
                            key={key}
                            href={subOption.path}
                            className="sub-submobile-option"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {subOption.subTitle}
                          </Link>
                        ))}
                      </S.SubMobileMenu>
                    )}
                  </React.Fragment>
                );
              })}
            </S.MobileMenuModal>
          </div>
        ) : (
          <S.HeaderNav>
            <ul className="header-options">
              {mainPages.map((page, key) => {
                return (
                  <React.Fragment key={key}>
                    {page.title === 'Área do Cliente' ? (
                      <li key={key} className="client-button-container">
                        <Button
                          radius="rounded"
                          icon={<PersonIcon color={'var(--white)'} />}
                          className="client-area-button"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          Área do Cliente
                        </Button>

                        <S.ClientAreaSubMenu
                          isHovered={subMenusHeader['Área do Cliente']}
                        >
                          <ul>
                            <li>
                              <Link href="area-do-cliente">
                                Área do Cliente
                              </Link>
                            </li>
                            <li>
                              <Link href="resultado-das-assembleias">
                                Resultado das Assembleias
                              </Link>
                            </li>
                            <li>
                              <Link href="recursos-nao-procurados">
                                Recursos não procurados
                              </Link>
                            </li>
                            <li>
                              <Link href="grupos-encerrados">
                                Grupos encerrados
                              </Link>
                            </li>
                          </ul>
                        </S.ClientAreaSubMenu>
                      </li>
                    ) : page?.subOptions ? (
                      <li key={key} className="submenu-options">
                        <div
                          className="option-title"
                          onClick={() => updateHeaderSubmenusState(page?.title)}
                        >
                          {page.title}
                        </div>

                        <S.SubMenuOptions isOpen={subMenusHeader[page?.title]}>
                          <div
                            onMouseLeave={handleMouseLeave}
                            className="sub-menu-container"
                          >
                            {page?.subOptions?.map((subOption, key) => (
                              <Link
                                href={subOption.path}
                                key={key}
                                onClick={() => updateHeaderSubmenusState('')}
                              >
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
                          onClick={() =>
                            page?.title === 'Início' ? scrollToTop() : {}
                          }
                        >
                          {page.title}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
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
