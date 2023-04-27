import { PersonIcon } from '@/assets/icons';
import { IHeaderOptions } from '@/components/global/Header/types';
import Button from '@/components/UI/Button';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react';
import * as S from './styles';

const DesktopHeader = () => {
  const [isSubMenuTradicaoOpen, setIsSubMenuTradicaoOpen] =
    useState<boolean>(false);
  const [isSubMenuConsorcioOpen, setIsSubMenuConsorcioOpen] =
    useState<boolean>(false);
  const [isHovered, setIsHovered] = useState(false);

  const pathName = usePathname();

  function handleMouseEnter() {
    setIsHovered(true);
  }
  function handleMouseLeave() {
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setIsHovered(false);
    }, 500); // .5 seg
  }

  const mainPages: IHeaderOptions[] = [
    {
      title: 'Início',
      path: '/'
    },
    {
      title: 'A Tradição',
      path: pathName,
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
      path: pathName,
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
      path: ''
    }
  ];

  const wrapperRef = useRef(null);
  const tradicaoWrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setIsSubMenuConsorcioOpen);
  useOutsideAlerter(tradicaoWrapperRef, setIsSubMenuTradicaoOpen);

  return (
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

                  <S.ClientAreaSubMenu isHovered={isHovered}>
                    <ul>
                      <li>
                        <Link href="area-do-cliente">Área do Cliente</Link>
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
                        <Link href="grupos-encerrados">Grupos encerrados</Link>
                      </li>
                    </ul>
                  </S.ClientAreaSubMenu>
                </li>
              ) : page.subOptions ? (
                <li key={key} className="submenu-options">
                  <div
                    className="option-title"
                    onClick={() => {
                      page.title === 'A Tradição'
                        ? setIsSubMenuTradicaoOpen(!isSubMenuTradicaoOpen)
                        : setIsSubMenuConsorcioOpen(!isSubMenuConsorcioOpen);
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
                      {page.subOptions.map((subOption, key) => (
                        <Link
                          href={subOption.path}
                          key={key}
                          onClick={() => {
                            setIsSubMenuConsorcioOpen(false);
                            setIsSubMenuTradicaoOpen(false);
                          }}
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
  );
};

export default DesktopHeader;
