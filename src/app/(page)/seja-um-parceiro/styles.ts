import styled from 'styled-components';

export const Container = styled.section`
  padding: 30px 0;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .lineWrapperInputs {
    display: flex;
    gap: 10px;
  }

  .multiRowsField {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const CarousselWrapper = styled.div`
  margin: 40px 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
