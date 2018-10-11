import React, { Component } from 'react';
import Button from './Button';
import Styled from 'styled-components';
import colors from './styles/colorVars';

const MainAreaStyled = Styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;
`;
const TitleStyled = Styled.h1`
  font-size: 3.9rem;
  font-weight: 300;
  color: ${colors.white};
  text-align: center;

  @media (min-width: 1060px) {
      margin: 0;
  }
`;

const SubtitleStyled = Styled.h3`
  font-size: 2rem;
  font-weight: 300;
  line-height:1.5;
  color: ${colors.white};
  text-align: center;
`;

const Underlined = Styled.span`
  border-bottom: 0.6px dotted rgba(255, 255, 255, 0.5);
`;

const BoldStyled = Styled.span`
  font-weight: 500;
`;

export default class MainArea extends Component {
  render() {
    return (
        <MainAreaStyled>
            <TitleStyled>Telephasic is a responsive<br/>site template by <Underlined>HTML5 UP</Underlined></TitleStyled>
            <SubtitleStyled>Designed and built on <BoldStyled>skel</BoldStyled> by <Underlined>AJ</Underlined>. Released for free under<br/>the <Underlined>Creative Commons Attribution 3.0 license.</Underlined></SubtitleStyled>
            <Button text='Get this party started'/>
        </MainAreaStyled>
    )
  }
}
