import * as React from 'react';
import {
  Navbar,
  NavbarGroup,
  Button,
  Popover,
  Position,
} from '@blueprintjs/core';
import { PriceFilter } from './PriceFilter';
import CitySearch from './CitySearch';

interface Props {
  setPriceRange: any;
}

export default (props: Props) => (
  <Navbar>
    <NavbarGroup align="left">
      <CitySearch />
      <Button className="pt-minimal" disabled={true}>
        Dates
      </Button>
      <Popover
        position={Position.BOTTOM_LEFT}
        popoverClassName="pt-popover-content-sizing"
        content={<PriceFilter setPriceRange={props.setPriceRange} />}
        target={<Button className="pt-minimal">Price</Button>}
      />
      <Button className="pt-minimal" disabled={true}>
        Guests
      </Button>
      <Button className="pt-minimal" disabled={true}>
        Types
      </Button>
      <Button className="pt-minimal" disabled={true}>
        Categories
      </Button>
    </NavbarGroup>
  </Navbar>
);
