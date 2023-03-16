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
  margin-top: 10px;

  font-weight: var(--weight-regular);
  font-size: var(-small-font-size);
  line-height: 26px;
  color: var(--text-color-light);

  margin-left: 20px;

  &::marker {
    font-size: 100%;
    color: var();
  }
`;

export const AboutUsCardWrapper = styled.div`
  display: flex;
  gap: 32px;
`;
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
