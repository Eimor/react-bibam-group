import React, { Component } from 'react';
import Styled from 'styled-components';
import colors from './styles/colorVars';

const ButtonStyled = Styled.button`
  background-color: ${colors.white};
  border: none;
  border-radius: 8px;
  color: ${colors.brink};
  padding: 23px 46px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.7rem;
  font-weight: 300;
  cursor: pointer;
  margin-top: 1.5em;
`;

export default class Button extends Component {
  render() {
    return (
        <ButtonStyled>{this.props.text}</ButtonStyled>
    )
  }
}
