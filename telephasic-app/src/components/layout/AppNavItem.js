import React, { Component } from 'react';
import Styled from 'styled-components';
import colors from '../styles/colorVars';

const NavItemStyled = Styled.a`
    color: ${colors.white};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.4rem;
    font-weight: 300;
    text-decoration: none;
    text-align: center;
    display: flex;
    align-items: center;
    margin: 0 20px;
    order: 1;
    outline: none;
    min-width: 150px;
    justify-content: center;

    @media (max-width: 1060px) {
      margin: 10px 35px;
    }

    &.active {
      height: 100%;
      font-weight: 600;
      border: 1px solid white;
      border-top: 0;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      text-transform: uppercase;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0 86px;
      letter-spacing: 2px;

      @media (max-width: 1060px) {
        order: 0;
        margin-top: 0;
        padding: 20px 86px;
      }
    }
`;


export default class AppNavItem extends Component {
  render() {
    const { active, onClickHandler, id }  = this.props;
    return (
      <NavItemStyled href={`#${id}`} className={active} onClick={onClickHandler} id={id}>
        {this.props.title}
      </NavItemStyled>
    )
  }
}
