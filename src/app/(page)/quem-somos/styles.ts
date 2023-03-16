import styled from 'styled-components';

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

export const AboutUsCardWrapper = styled.div``;

export const VideoWrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  position: relative;
  margin: 50px 0;

  .bgHomeVideo {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
