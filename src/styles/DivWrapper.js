import styled from 'styled-components';

export const DivWrapper = styled.div`
  //width: ${(props) => props.widthValue};
  width: 100%;
  padding: 200px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  background: white;
  border-top: 1px solid #a1a1a1;
  position: relative;
  display: ${(props) => (props.hidden === true ? 'none' : 'block')};

  &.about {
    padding: 150px;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      padding: 50px;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      padding: 20px;
    }
  }

  &.skills {
    height: 100%;
    min-height: 900px;

    @media screen and (min-width: 480px) and (max-width: 767px) {
      height: 100vh;
      min-height: initial;
    }

    @media screen and (min-width: 320px) and (max-width: 479px) {
      min-height: initial;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 767px) {
    padding: 50px;
  }

  @media screen and (min-width: 320px) and (max-width: 479px) {
    padding: 20px;
  } ;
`;
