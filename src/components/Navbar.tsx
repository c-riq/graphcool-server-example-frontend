import * as React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import AirbnbLogo from './AirbnbLogo';
import SignUpDialog from './SignUpDialog';

interface Props {
  loginApp?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
}

class NavigationBar extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  handleOpen = () => this.setState({ isOpen: true });

  render() {
    console.log(this.props)
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
        </NavbarGroup>
        <NavbarGroup align="right">
          <Button className="pt-minimal">Become a host</Button>
          <Button className="pt-minimal">Help</Button>
          {this.props.firstName ? this.props.firstName :
            <SignUpDialog />
        }
            <Button className="pt-minimal">Login</Button>
        </NavbarGroup>
      </Navbar>
    );
  }
}

export default NavigationBar;
