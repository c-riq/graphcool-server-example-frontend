import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  Button,
  Popover,
  Position
} from '@blueprintjs/core';
import { PriceFilter } from './PriceFilter';

interface Props {
  setPriceRange: any;
}

export default (props: Props) => (
  <Navbar>
    <NavbarGroup align="left">
      <Button className="pt-minimal">Dates</Button>
      <Popover
        position={Position.BOTTOM_LEFT}
        popoverClassName="pt-popover-content-sizing"
        content={<PriceFilter setPriceRange={props.setPriceRange} />}
        target={<Button className="pt-minimal">Price</Button>}
      />
      <Button className="pt-minimal">Guests</Button>
      <Button className="pt-minimal">Types</Button>
      <Button className="pt-minimal">Categories</Button>
    </NavbarGroup>
  </Navbar>
);
