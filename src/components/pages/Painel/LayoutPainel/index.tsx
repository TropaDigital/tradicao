// import {
//   DoubleChevronWithCircle,
//   LogoWhite,
//   PageIcon,
// } from '@/src/assets/icons';
import { ReactNode, useState } from 'react'
import { Container } from './styles'
import SelectSideBar from '../components/SelectSideBar'

import panelConfig from '../panelConfig.json'
import LogoutPanel from '../components/LogoutPanel'
import Link from 'next/link'
import NotificationPanel from '../components/NotificationPanel'
import MobileMenu from '../components/MobileMenu'
import { removeCookies } from 'cookies-next'
import { LogoutIcon, DefaultLogo, PageIcon, DoubleChevronWithCircle } from '@/assets/icons'
import { useRouter } from 'next/navigation'
interface ILayoutPanelProps {
  children: ReactNode
}

export default function LayoutPainel({ children }: ILayoutPanelProps) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(true)

  const router = useRouter()

  return (
    <Container sideBarIsOpen={sideBarIsOpen}>
      <header className="headerLayoutDashboard">
        <div className="leftSideWithLogo">
          <Link href="/" passHref>
            <DefaultLogo width={180} height={50} />
          </Link>
        </div>
        <div className="rigthSideWithAvatar">
          <div className="leftSideWrapper">
            <MobileMenu />
            <p className="noticeUser">
              <span className="largeScreen">
                Olá, seja bem-vindo(a) de volta.
              </span>
              <span className="tinyScreen">Bem-vindo(a) de volta.</span>
            </p>
          </div>
          <div className="userContainer">
            <NotificationPanel />
            <LogoutPanel />
          </div>
        </div>
      </header>
      <div className="mainWrapper">
        <div className="sideBarWithContent">
          <div className="navigateOptions">
            <SelectSideBar
              sideBarIsOpen={sideBarIsOpen}
              openSideBar={() => {
                setSideBarIsOpen(true)
              }}
              pages={panelConfig.pages}
              title={'Dashboard'}
              icon={<PageIcon />}
            />
          </div>
          <button
            className="handleCloseSideBar"
            onClick={() => {
              setSideBarIsOpen(!sideBarIsOpen)
            }}
          >
            <DoubleChevronWithCircle />
            <p className="textHandleCloseSideBar">{sideBarIsOpen && "Recolher Menu"}</p>
          </button>
        </div>

        <main className="mainWrapperWithChildren">{children}</main>
      </div>
      <footer className="footerWrapper">
        <div>&copy; 2023 Consórcio Tradição. Todos os direitos reservados.</div>
        <div>
          <Link href="/painel/dashboard">Privacy policy</Link>
          <Link href="/painel/dashboard">Terms of use</Link>
        </div>
      </footer>
    </Container>
  )
}
