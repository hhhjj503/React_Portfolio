import styled from 'styled-components';

export const DivWrapper = styled.div`
  //width: ${(props) => props.widthValue};
  width: 100%;
  padding: 200px;
  height: calc(100vh - 80px);
  box-sizing: border-box;
  margin: 0 auto;
  background: white;
  border-top: 1px solid #a1a1a1;
  position: relative;
  display: ${(props) => (props.hidden === true ? 'none' : 'block')};

  @media screen and (min-width: 480px) and (max-width: 767px) {
    padding: 50px;
  }

  @media screen and (min-width: 320px) and (max-width: 479px) {
    padding: 20px;
  } ;
`;
