import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 50px;
    height: 3px;
    background: blue;
    border-radius: 10px;
  }
`;
