import * as React from 'react';
import { Navbar, NavbarGroup, Button } from '@blueprintjs/core';

export default () => (
  <Navbar>
    <NavbarGroup align="left">
      <Button className="pt-minimal">Dates</Button>
      <Button className="pt-minimal">Guests</Button>
      <Button className="pt-minimal">Types</Button>
      <Button className="pt-minimal">Categories</Button>
    </NavbarGroup>
  </Navbar>
);
