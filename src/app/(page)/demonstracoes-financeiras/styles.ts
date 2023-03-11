import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 43px 150px;

  @media(max-width: 1470px) {
    padding: 40px 120px;
  }
  @media(max-width: 1400px) {
    padding: 37px 90px;
  }
  @media(max-width: 1400px) {
    padding: 34px 60px;
  }
  @media(max-width: 680px) {
    padding: 34px 30px;
  }
  @media(max-width: 450px) {
    padding: 28px 20px;
  }
`;

export const DemonstrationsListContainer = styled.div`
  min-height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 30px;

    li {
        width: 100%;
        display: flex;
        justify-content: center;
    }
  }
`;
