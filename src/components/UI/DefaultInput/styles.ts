import styled from 'styled-components';

type Props = {
  icon: any;
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    .input-label {
        color: var(--primary);
        font-weight: 700;
        font-size: 15px;
    }

    .validation-error {
      font-size: 12px;
      color: var(--status-danger);
      font-weight: 500;
    }
`;

export const InputWrapper = styled.div<Props>`
  position: relative;
  width: 100%;

  input {
    padding: ${({ icon }) => (icon ? '13px 16px 13px 50px' : '13px 16px')};
    border: 1px solid var(--gray-300);
    border-radius: 5px;
    font-size: 16px;
    width: 100%;

    &::placeholder {
      color: var(--gray-300);
      text-overflow: ellipsis;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 19px;
  }
`;
