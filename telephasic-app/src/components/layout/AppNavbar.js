import React, { Component } from 'react'
import AppNavItem  from './AppNavItem';
import Styled from 'styled-components';

const NavBarStyled = Styled.nav`
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1060px) {
        display: flex;
        flex-direction: column;
        height: unset;
    }
`;


export default class AppNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentItem: 'telephasic'
        }
    };

    onSwitchClick= (event) => {
        this.setState({
            currentItem: event.target.id
        });
    };

    isActive = (id) => {
        return id === this.state.currentItem ? "active" : "inactive";
    }

    render() {
    const navItems = [ 'dropdown', 'left', 'telephasic', 'right', 'nosidebar'];

    return (
        <NavBarStyled>  
            <AppNavItem title="Dropdown" onClickHandler={this.onSwitchClick}  active={this.isActive(navItems[0])} id={navItems[0]}/> 
            <AppNavItem title="Left Sidebar" onClickHandler={this.onSwitchClick} active={this.isActive(navItems[1])} id={navItems[1]}/> 
            <AppNavItem title="Telephasic" onClickHandler={this.onSwitchClick} active={this.isActive(navItems[2])} id={navItems[2]}/> 
            <AppNavItem title="Right Sidebar" onClickHandler={this.onSwitchClick} active={this.isActive(navItems[3])} id={navItems[3]}/> 
            <AppNavItem title="No Sidebar" onClickHandler={this.onSwitchClick} active={this.isActive(navItems[4])} id={navItems[4]}/> 
        </NavBarStyled>
    )
  }
}
