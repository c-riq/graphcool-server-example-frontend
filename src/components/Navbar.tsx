import * as React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import AirbnbLogo from './AirbnbLogo';
import SignUpDialog from './SignUpDialog';

class NavigationBar extends React.Component<{}, {}> {

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
    </NavbarGroup>
    <NavbarGroup align="right">
      <Button className="pt-minimal">Become a host</Button>
      <Button className="pt-minimal">Help</Button>
      <SignUpDialog />
      <Button className="pt-minimal">Login</Button>
    </NavbarGroup>
  </Navbar>
)
}

}

export default NavigationBar