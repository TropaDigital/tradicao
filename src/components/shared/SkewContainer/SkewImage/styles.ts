import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  max-width: 80%;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  margin-left: -55px;
  transform: skewX(-20deg);
  
  .imageWrapper {
    position: relative;
    margin-right: -40px;
    transform: skewX(20deg);    
    width: fit-content;    
    left: 0;
    scale: 1.1;
    img{
      object-fit: cover;
    }
  }
`;
