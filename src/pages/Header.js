import React from 'react';
import styled from 'styled-components';
import { Link } from '../../node_modules/react-router-dom/dist/index';

const Header = () => {
  const Header = styled.header`
    width: 1200px;
    max-width: 100%;
    padding: 20px 0;
    margin: 50px auto 0 auto;
    text-align: center;
    background-color: white;
  `;

  const Ul = styled.ul`
    width: 100%;

    & li {
      font-size: 2rem;
      color: white;
      display: inline-block;
      padding: 0 20px;

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
      </Ul>
    </Header>
  );
};

export default Header;
