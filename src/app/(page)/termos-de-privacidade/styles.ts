import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;

  .normal-unorderedList {
    /* list-style-type: disc; */

    li {
      list-style: inside disc;
    }
  }
`;

export const Subtitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  font-weight: 700;
`;

export const Text = styled.p`
  text-align: justify;
  margin: 10px 0;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 6px;
  margin: 10px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: var(--Blue);

  :visited {
    color: var(--Purple);
  }
`;
