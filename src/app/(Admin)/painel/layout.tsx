'use client';

import {
  CloseIcon,
  DoubleChevronWithCircle,
  DefaultLogo,
  PageIcon,
  DefaultBrasao
} from '@/assets/icons';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import SelectSideBar from '../../../components/pages/Painel/components/SelectSideBar';

import panelConfig from '../../../components/pages/Painel/panelConfig.json';
import LogoutPanel from '../../../components/pages/Painel/components/LogoutPanel';
import Link from 'next/link';
import { useOutsideAlerter } from '@/utils/useOutsideAlerter';
import Image from 'next/image';

interface ILayoutPanelProps {
  children: ReactNode;
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(true);

  return (
    <>
      <Container sideBarIsOpen={sideBarIsOpen}>
        <header className="headerLayoutDashboard">
          <div className="leftSideWithLogo">
            <Link href="/">
              {sideBarIsOpen ? (
                // <DefaultLogo width={180} height={70} />
                <Image
                  src="/images/logo-default.png"
                  alt="Logo Consórcio Tradição"
                  width={180}
                  height={80}
                />
              ) : (
                <DefaultBrasao />
              )}
            </Link>
          </div>
          <div className="rigthSideWithAvatar">
            <div className="navigateOptions">
              <div className="sideBarMenuWrapper">
                <div
                  onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
                  className="menuHamburguerContainer"
                >
                  <div
                    className={`menuHamburger ${
                      sideBarIsOpen ? 'opened' : 'closed'
                    }`}
                  ></div>
                </div>
                <div className="sideBarMenu">
                  <Link href="/" className="logoSideBarMenu">
                    <DefaultBrasao />
                  </Link>

                  {panelConfig?.pages?.map((page, key) => {
                    return (
                      <Link href={`/painel/${page.path}`} key={key}>
                        {page.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="congratsUser">Olá, seja bem-vindo(a) de volta.</p>
            <LogoutPanel />
          </div>
        </header>
        <div className="mainWrapper">
          <div className="sideBarWithContent">
            <div className="navigateOptions">
              <SelectSideBar
                sideBarIsOpen={sideBarIsOpen}
                openSideBar={() => {
                  setSideBarIsOpen(true);
                }}
                pages={panelConfig.pages}
                title={'Páginas'}
                icon={<PageIcon />}
              />
            </div>
            <button
              className="handleCloseSideBar"
              onClick={() => {
                setSideBarIsOpen(!sideBarIsOpen);
              }}
            >
              <DoubleChevronWithCircle />
              <p className="textHandleCloseSideBar">Recolher Menu</p>
            </button>
          </div>

          <main className="mainWrapperWithChildren">{children}</main>
        </div>
      </Container>
    </>
  );
}
