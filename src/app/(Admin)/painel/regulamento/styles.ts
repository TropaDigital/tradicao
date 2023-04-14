import styled from 'styled-components';

export const ObjectWrapper = styled.div`
  height: 0;
  margin-bottom: 18px;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16/9 ratio */
  padding-top: 30px; /* IE6 workaround*/
  position: relative;

  object {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 600px;
`;
