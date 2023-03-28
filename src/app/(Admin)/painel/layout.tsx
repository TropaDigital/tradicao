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

interface ILayoutPanelProps {
  children: ReactNode;
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false);

  return (
    <>
      <Container sideBarIsOpen={sideBarIsOpen}>
        <header className="headerLayoutDashboard">
          <div className="leftSideWithLogo">
            <Link href="/">
              {sideBarIsOpen ? (
                <DefaultLogo width={180} height={70} />
              ) : (
                <DefaultBrasao />
              )}
            </Link>
          </div>
          <div className="rigthSideWithAvatar">
            <div className="navigateOptions">
              <div className="sideBarMenuWrapper">
                <div onClick={() => setSideBarIsOpen(!sideBarIsOpen)}>
                  <div
                    className={`menuHamburger ${
                      sideBarIsOpen ? 'opened' : 'closed'
                    }`}
                  ></div>
                </div>
                <div className="sideBarMenu">
                  {panelConfig.pages.map((page) => {
                    return (
                      <Link href={`/painel/${page.path}`}>{page.name}</Link>
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