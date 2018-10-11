import React, { Component } from 'react';
import Background from './components/layout/Background';
import AppNavbar from './components/layout/AppNavbar';
import MainArea from './components/MainArea';
import Styled from 'styled-components';
import './App.css';

const ViewStyled = Styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

class App extends Component {
  render() {
    return (
        <ViewStyled>
            <AppNavbar />
            <Background />
            <MainArea />
        </ViewStyled>
    );
  }
}

export default App;
