import * as React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import AirbnbLogo from './AirbnbLogo';
import SignUpDialog from './SignUpDialog';
import LoginDialog from './LoginDialog';
import styled from 'styled-components';

interface Props {
  loginApp: any;
  logoutApp: any;
  firstName?: string;
  lastName?: string;
  email?: string;
}

const Title = styled.span`
  font-size: 30px;
  font-weight: 500;
  text-align: left;
  color: #fd5c63;
`;

class NavigationBar extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  handleOpen = () => this.setState({ isOpen: true });

  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>
            <AirbnbLogo />
          </NavbarHeading>
          <div className="pt-input-group pt-large">
            <span className="pt-icon pt-icon-search" />
            <input
              className="pt-input"
              type="search"
              placeholder="Search input"
              dir="auto"
            />
          </div>
          <Title>&nbsp;&nbsp;Coolbnb</Title>
        </NavbarGroup>
        <NavbarGroup align="right">
          <Button className="pt-minimal">Become a host</Button>
          <Button className="pt-minimal">Help</Button>
          {this.props.firstName ? (
            this.props.firstName
          ) : (
            <SignUpDialog loginApp={this.props.loginApp} />
          )}
          {this.props.firstName ? (
            <Button className="pt-minimal" onClick={this.props.logoutApp}>
              Logout
            </Button>
          ) : (
            <LoginDialog loginApp={this.props.loginApp} />
          )}
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default NavigationBar;
