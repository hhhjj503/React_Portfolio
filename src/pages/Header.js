import React from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Header = () => {
  const Header = styled.header`
    width: 100%;
    padding: 30px 0;
    text-align: center;
    background-color: white;
    position: relative;
    z-index: 2;
  `;

  const Ul = styled.ul`
    width: 100%;

    & li {
      font-size: 2rem;
      color: white;
      display: inline-block;
      padding: 0 30px;

      & a {
        font-weight: bold;
      }

      @media screen and (min-width: 480px) and (max-width: 767px) {
        font-size: 1.5rem;
        padding: 0 15px;
      }

      @media screen and (min-width: 320px) and (max-width: 479px) {
        font-size: 1.4rem;
        padding: 0 15px;
      }
    }
  `;

  return (
    <Header>
      <Ul>
        <li>
          <Link to="/React_Portfolio">Home</Link>
        </li>
        <li>
          <Link to="/React_Portfolio/about">About</Link>
        </li>
        <li>
          <Link to="/React_Portfolio/skills">Skills</Link>
        </li>
        <li>
          <Link to="/React_Portfolio/portfolio">Portfolio</Link>
        </li>
      </Ul>
    </Header>
  );
};

export default Header;
