import styled, { css } from 'styled-components';

export const QuemSomosContainer = styled.div`
  max-width: 100vw;
  overflow: hidden;

  .title {
    //class inside main title component
    margin-top: 36px;
  }
`;

export const AboutUsContent = styled.p`
  margin-top: 28px;
  max-width: 747px;

  font-weight: var(--weight-regular);
  font-size: var(--text-smal-sm);
  line-height: 18px;
  color: var(--text-color-light);
`;

export const AboutUsSubtitle = styled.h2`
  margin-top: 43px;

  font-style: normal;
  font-weight: var(--font-bold);
  font-size: var(--h1-font-size);
  line-height: 46px;
  letter-spacing: -0.02em;
  color: var(--primary-mid);

  &::before {
    content: '| ';
  }
`;

export const AboutUsBenefitsTitle = styled.h2`
  margin-top: 34px;

  font-weight: var(--weight-bold);
  font-size: var(--h2-font-size);
  line-height: 37px;
  color: var(--primary);
`;

export const AbsoluteImageWrapper = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;

  margin-right: -150px;
  margin-bottom: -200px;
  z-index: -1;

  width: 720px;
  height: 720px;

  @media (max-width: 1025px) {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 769px) {
    margin-bottom: -120px;
    margin-right: -105px;

    width: 430px;
    height: 430px;
  }

  @media (max-width: 769px) {
    margin-bottom: -120px;
    margin-right: -105px;

    width: 350px;
    height: 350px;
  }

  img {
    object-fit: cover;
  }
`;

export const BenefitsBottomWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  max-width: 100vw;
  margin-bottom: 36px;

  .benefitsContainer {
    display: flex;
    .leftSide {
      flex: 2;
    }
    .rigthSide {
      flex: 1;
      display: flex;
      gap: 40px;
      align-items: flex-end;
      justify-content: flex-end;

      .imageWrapper {
        height: 81px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;

        .imageLabel {
          font-weight: var(--weight-bold);
          font-size: var(--small-font-size);
          line-height: 18px;
          text-align: center;
          color: var(--primary-mid);
        }
      }
    }
  }

  @media (max-width: 769px) {
    .benefitsContainer {
      flex-direction: column;
      .leftSide {
        flex: 1;
      }
      .rigthSide {
        flex: 1;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 20px;
      }
    }
  }
`;

export const BenefitItem = styled.li`
  list-style: disc;
  margin-top: 10px;
  font-weight: var(--weight-regular);
  font-size: var(-small-font-size);
  line-height: 26px;
  color: var(--text-color-light);
  margin-left: 20px;
  &::marker {
    font-size: 100%;
  }
`;

interface IVideoWrapper {
  videoIsRunning: boolean;
}

export const VideoWrapper = styled.div<IVideoWrapper>`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  margin: 50px 0;

  video {
    border-radius: 10px;
  }

  .bgHomeVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlayPlay {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ${({ videoIsRunning }) =>
      videoIsRunning &&
      css`
        opacity: 0;
        transition: all 0.3s;

        &:hover {
          transition: all 0.3s;
          opacity: 1;
        }
      `}

    .videoButtonWrapper {
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      cursor: pointer;
    }

    .thirdColor,
    .secondColor,
    .primaryColor {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .thirdColor {
      cursor: pointer;
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
      background: linear-gradient(
        97.17deg,
        rgba(0, 54, 198, 1) -10.7%,
        rgba(62, 101, 208, 0.3) 13.94%
      );

      &:hover {
        transform: scale(1.05);
        transition: all 0.5s;
      }

      transition: all 0.5s;

      .secondColor {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        background: linear-gradient(
          77.17deg,
          rgba(0, 54, 198, 1) -0.7%,
          rgba(62, 101, 208, 0.1) 93.94%
        );
        box-shadow: 0px 0px 64px rgba(0, 0, 0, 0.85);
        .primaryColor {
          width: 11.25rem;
          height: 11.25rem;
          border-radius: 50%;
          background-color: var(--primary);
        }
      }

      @media (max-width: 1024px) {
        transform: scale(0.8);
        &:hover {
          transform: scale(0.85);
        }
      }

      @media (max-width: 769px) {
        transform: scale(0.45);
        &:hover {
          transform: scale(0.50);
        }
      }

      @media (max-width: 500px) {
        width: 250px;
        height: 250px;
        
        .secondColor {
          width: 200px;
          height: 200px;
          .primaryColor {
            width: 150px;
            height: 150px;
          }
        }
      }
    }
  }
`;

export const MoralValuesCard = styled.div`
  padding: 20px;
  background: var(--white);
  box-shadow: 0 20px 20px -7px rgba(0, 0, 0, 0.4);
  height: 200px;
  min-width: 357px;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  .moralValuesTitle {
    font-size: 40px;
    font-weight: 700;
    color: var(--primary-mid);
    text-align: center;
  }

  .gridTemplateValuesCard {
    margin: 10px 16px;
    display: grid;
    grid-column-gap: 36px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const MoralValuesCardItem = styled.span`
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 36px;
  .moralValuesCardItemText {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--primary-mid);
  }
`;

export const ContemplatedWrapper = styled.div`
  width: 100%;
  height: auto;
  background: var(--degrade-primary);
  padding: 30px 0px;
`;

export const ContemplatedTitle = styled.h2`
  font-weight: var(--weight-bold);
  font-size: var(--text-headline-lgx);
  line-height: 46px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;

export const ContemplatedQuotasWrapper = styled.div`
  display: flex;
  gap: 7px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 11px;

  .contemplatedQuotesNumber {
    font-weight: var(--weight-bold);
    font-size: 72px;
    line-height: 83px;
    text-align: center;
    color: var(--secondary);
  }
  .contemplatedQuotesTextWrapper {
    .contemplatedQuotesTitle {
      font-weight: var(--weight-bold);
      font-size: 32px;
      line-height: 37px;
      color: var(--secondary);
    }
    .contemplatedQuotesText {
      font-weight: var(--weight-regular);
      font-size: var(--small-font-size);
      line-height: 18px;
      color: var(--secondary);
    }
    .cl-white {
      color: var(--white);
    }
  }

  .cl-white {
    color: var(--white);
  }

  @media(max-width: 769px){
    transform: scale(0.8);
  }
`;

export const ContemplatedValueWrapper = styled.div`
  margin-top: 29px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;

  @media(max-width: 1024px){
    transform: scale(0.8);
  }

  @media(max-width: 769px){
    transform: scale(0.6);
  }

  @media(max-width: 769px){
    transform: scale(0.5);
  }

  @media (max-width: 480px) {
    transform: scale(0.35);
  }
`;

export const ContemplatedValueText = styled.p`
  margin-top: 10px;
  font-weight: var(--weight-bold);
  font-size: var(--h2-font-size);
  line-height: 37px;
  text-align: center;
  color: var(--white);
  margin-bottom: 31px;

  @media(max-width: 769px){
    font-size: var(--text-headline-md);
  }
`;

export const Separator = styled.div`
  min-width: 100%;
  height: 1px;
  background-color: var(--white);
  opacity: 0.5;
`;

export const GenericFlexWrapper = styled.div`
  margin-top: 20px;

  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 1024px){
    flex-direction: column;
    gap: 18px;
  }
`;
