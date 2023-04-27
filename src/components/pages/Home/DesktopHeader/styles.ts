import Modal from '@/components/UI/Modal';
import styled from 'styled-components';

type PropsClient = {
  isHovered: boolean;
};

type Props = {
  showHeader?: boolean;
  isOpen?: boolean;
};

export const HeaderNav = styled.nav`
  .header-options {
    display: flex;
    align-items: center;
    gap: 30px;

    .option-title {
      color: var(--primary);
      font-weight: 700;
      padding: 7px 12px;
      border-radius: 30px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: rgba(62, 101, 208, 0.25);
      }
    }

    .client-button-container {
      position: relative;

      .client-area-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 15px;
        gap: 5px;
        position: relative;
      }
    }

    .submenu-options {
      position: relative;
    }
  }
`;

export const ClientAreaSubMenu = styled.div<PropsClient>`
  display: ${({ isHovered }) => (isHovered ? 'block' : 'none')};
  position: absolute;
  top: 45px;
  background: linear-gradient(77.17deg, #0036c6 -0.7%, #3e65d0 93.94%);
  padding: 10px;
  gap: 11px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  width: max-content;

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  ul > li {
    padding: 2px;
  }

  ul > li > a {
    color: var(--white);
    font-size: 14px;
  }

  :hover {
    display: flex;
  }
`;

export const SubMobileMenu = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: ${({ isOpen }) => (isOpen ? '14px' : '0px')};
  font-size: 14px;
  font-weight: 400;
  margin-left: 5px;
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  .sub-submobile-option {
    color: var(--primary);
    font-weight: 400;
  }
`;

export const SubMenuOptions = styled(Modal)`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  .sub-menu-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;
