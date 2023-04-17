'use client';
import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100vw; */
  height: fit-content;
  background: var(--primary);
  background: var(--degrade-primary);
`;

export const FooterWrapper = styled.div`
  background: var(--degrade-primary);
  padding: 44px 150px 17px 150px;

  @media (max-width: 450px) {
    padding: 30px 5% 17px 5%;
  }
`;

export const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media (max-width: 1350px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 33px;

  @media (max-width: 1350px) {
    flex-direction: column;
  }

  @media (max-width: 500px) {
    svg {
      max-width: 90%;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .correct {
    margin-bottom: -22px;
  }

  @media (max-width: 1350px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 16px;

    .correct {
      width: 230px;
    }

    .reclame-logo {
      width: 230px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 500px) {
    width: 80%;
    justify-content: center;

    a {
      svg {
        width: 32px;
      }
    }
  }
`;

export const MidFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(262px, 1fr));
  gap: 30px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Column = styled.div`
  width: 262px;
  height: fit-content;
  margin: 0 auto;
`;

export const TitleColumns = styled.h2`
  font-size: var(--text-smal-xl);
  font-weight: var(--weight-bold);
  color: var(--white);
`;

export const TextButton = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 31px;
  font-size: var(--text-smal-sm);
  font-weight: var(--weight-regular);
  line-height: 30px;
  color: var(--white);
`;

export const TextField = styled.div`
  font-size: var(--text-smal-sm);
  font-weight: var(--weight-regular);
  line-height: 18px;
  color: var(--white);

  span {
    font-weight: var(--weight-bold);
  }
`;

export const GreenButton = styled.div`
  display: flex;
  width: 262px;
  height: 52px;
  position: relative;
  transition: ease-in-out 0.3s;

  cursor: pointer;

  .absolute {
    position: absolute;
    left: 0;
    top: 0;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 52px;
      position: relative;
      z-index: 9;

      svg {
        z-index: 99;
      }

      &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          var(--secondary) 28.3%,
          #00bb53 90.57%
        );
        border-radius: 10px;
        position: absolute;
        transform: skew(-15deg);
      }
    }
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 220px;
    height: 52px;
    position: relative;
    margin-left: auto;

    &::before {
      content: '';
      width: 100%;
      height: 47px;
      transform: skew(-15deg);
      position: absolute;
      right: 0;
      background: linear-gradient(180deg, #00bb53 0%, var(--secondary) 100%);
      border-radius: 0 10px 10px 0;
    }

    .text {
      color: var(--white);
      font-size: var(--text-smal-md);
      font-weight: var(--weight-bold);
      z-index: 9;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Divider = styled.div`
  border: 1px solid #456fe2;
  max-width: 1140px;
  margin: 0 auto;
  margin-top: 18px;
  margin-bottom: 20px;
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  max-width: 1140px;
  margin: 0 auto;

  .text {
    color: var(--white);
    font-size: var(--text-smal-md);
    font-weight: var(--weight-bold);
  }

  .square-image {
    max-width: 130px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: fit-content;

  background: var(--primary-light);
  background: linear-gradient(
    77deg,
    var(--primary-light) 0.7%,
    var(--primary) 99.14%
  );

  padding: 30px 150px;

  .text {
    max-width: 1140px;

    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
    color: var(--white);
    text-align: center;

    margin-bottom: 14px;
  }

  .developed {
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: var(--text-smal-sm);
    font-weight: var(--weight-regular);
    color: var(--white);
    text-align: center;
  }

  @media (max-width: 800px) {
    .developed {
      max-width: 80%;
      flex-direction: column;
      gap: 10px;
    }
  }

  @media (max-width: 450px) {
    padding: 30px 10%;
  }
`;
