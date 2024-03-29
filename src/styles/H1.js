import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
  position: relative;
  display: ${(props) => (props.hidden === true ? 'none' : 'block')};

  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 50px;
    height: 3px;
    background: rgb(65, 191, 207);
    border-radius: 10px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 2rem;

    &:after {
      bottom: -15px;
      height: 2px;
      width: 40px;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    text-align: center;
    margin: 20px 0 30px 0;

    &:after {
      left: 50%;
      transform: translateX(-50%);
      bottom: -5px;
      height: 1px;
      width: 30px;
    }
  }
`;
