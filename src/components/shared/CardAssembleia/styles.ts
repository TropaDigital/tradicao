import styled from 'styled-components';

export const CardContemplated = styled.div`
  display: flex;
  flex-direction: column;

  width: 438px;
  height: fit-content;

  border-radius: 10px;
  border: 1px solid var(--gray-300);
  overflow: hidden;

  cursor: pointer;
  transition: ease-in 0.3s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardTopContemplated = styled.div`
  display: flex;
  align-items: center;
  height: 210px;
  background: var(--degrade-primary);

  padding: 20px;

  position: relative;

  span {
    align-self: flex-start;
    width: 20px;
    font-size: var(--text-headline-sm);
    font-weight: var(--weight-bold);
    color: var(--gray-100);
    z-index: 2;
    padding-top: 20px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20%;
    height: 40px;
    /* background-color: white; */
    z-index: 9;

    position: absolute;
    top: 60%;
    left: 0;

    svg {
      width: 45px;
      height: auto;
    }
  }

  .image {
    width: 100%;
    height: 210px;
    position: absolute;
    top: 0;
    z-index: 0;
  }

  &::before {
    content: '';
    width: 20%;
    height: 213px;
    background: var(--degrade-primary);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 2;
  }
`;

export const CardBottomContemplated = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  height: fit-content;
  background: var(--white);

  font-size: var(--text-headline-sm);
  color: var(--primary-mid);

  padding: 10px;
  z-index: 2;
`;
