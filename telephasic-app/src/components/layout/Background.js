import React, { Component } from 'react';
import Styled, { ThemeProvider } from 'styled-components';
import colors from '../styles/colorVars';

const BackgroundTile = Styled.div`
    width: 150%;
    height: 60vh;
    transform: rotate(-20deg);
    transform-origin: bottom left;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background: linear-gradient(90deg, ${props => props.theme.startColor} , ${props => props.theme.midColor} ${props => props.theme.midColorPercent}%, ${props => props.theme.endColor});
  `;

const BackgroundWrapper = Styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    z-index: -99;

    @media (max-width: 1060px) {
        height: auto;
        overflow-x: hidden;
        /* Gradiente para rellenar el background en responsive*/
        background: linear-gradient(90deg, ${colors.apricot} , ${colors.carissma} 80%, ${colors.tumbleweed});
    }
`;

BackgroundTile.defaultProps = {
    theme: {
        startColor: colors.froly,
        midColor: colors.bubblegum,
        midColorPercent: 40,
        endColor: colors.mandys
    }
  }

const midBackground = {
    startColor: colors.brink,
    midColor: colors.tacao,
    midColorPercent: 50,
    endColor: colors.tonys
}

const bottomBackground = {
    startColor: colors.apricot,
    midColor: colors.carissma,
    midColorPercent: 80,
    endColor: colors.tumbleweed
}

export default class Background extends Component {

  render() {
    return (
        <BackgroundWrapper>
            <BackgroundTile/>
            <ThemeProvider theme={midBackground}>
                <BackgroundTile/>
            </ThemeProvider>
            <ThemeProvider theme={bottomBackground}>
                <BackgroundTile/>
            </ThemeProvider>
        </BackgroundWrapper>
    )
  }
}
