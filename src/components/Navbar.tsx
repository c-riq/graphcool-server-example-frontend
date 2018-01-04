import * as React from 'react';
import { Navbar, NavbarGroup, NavbarHeading, Button } from '@blueprintjs/core';
import AirbnbLogo from './AirbnbLogo';

export default () => (
  <Navbar>
    <NavbarGroup>
      <NavbarHeading>
        <AirbnbLogo />
      </NavbarHeading>
    </NavbarGroup>
    <NavbarGroup align="right">
      <Button className="pt-minimal">Become a host</Button>
      <Button className="pt-minimal">Help</Button>
      <Button className="pt-minimal">Sign Up</Button>
      <Button className="pt-minimal">Login</Button>
    </NavbarGroup>
  </Navbar>
);
