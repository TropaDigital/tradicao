import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

export const EditorHeader = styled.div`
  background-color: var(--gray-100);
  min-height: 47px;
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border: 1px solid var(--gray-300);
  border-bottom: none;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 24px;

  button {
    background: none;
  }

  @media (max-width: 407px) {
    overflow-x: scroll;
  }

  ::-webkit-scrollbar {
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  svg {
    cursor: pointer;
  }

  svg.left {
    transform: rotateY(180deg);
  }
`;

export const ChangeTextColor = styled.label`
  position: relative;
  background-color: var(--gray-100);

  input[type='color'] {
    appearance: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    border: none;
  }

  input[type='color']::-webkit-color-swatch {
    border: none;
  }
`;

export const MenuFontSize = styled.div`
  position: relative;
`;

export const DropDownMenuFontSize = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 110%;
  background-color: var(--gray-100);
  border: 1px solid var(--gray-300);
  padding: 8px;
  border-radius: 8px;
  min-width: 100px;
  text-align: left;

  ul li {
    padding: 2px 4px;
    border-radius: 8px;
  }

  ul li:hover {
    background-color: rgba(3, 3, 3, 0.1);
  }
`;
