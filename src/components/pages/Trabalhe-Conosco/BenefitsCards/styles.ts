import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 250px;
  height: 200px;
  border-radius: 16px;
  box-shadow: var(--shadow);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0px 0px 15px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--gray-300);
  transition: all 0.2s ease-in-out;

  :hover {
    scale: 1.01;
  }
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

  .image {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const CardTitle = styled.h4`
  padding: 8px 0;
  text-align: center;
`;
