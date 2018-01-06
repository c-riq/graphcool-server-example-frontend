import * as React from 'react';
import styled from 'styled-components';
import HomesGrid from './HomesGrid';

import Filterbar from './Filterbar';
import { PriceFilter } from './PriceFilter';

const Wrapper = styled.div`
  margin-left: 20px;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: left;
  color: #fd5c63;
`;

interface State {
  priceRange: Array<number>;
}

class Homes extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      priceRange: [0, 200],
    };
    this.setPriceRange = this.setPriceRange.bind(this);
  }

  setPriceRange(priceRange: Array<number>) {
    this.setState({ priceRange: priceRange });
    console.log(this.state.priceRange, typeof this.state.priceRange);
  }

  render() {
    return (
      <Wrapper>
        <Title>CoolBnB</Title>
        <Filterbar />
        <PriceFilter setPriceRange={this.setPriceRange} />

        <HomesGrid priceRange={this.state.priceRange} />
      </Wrapper>
    );
  }
}

export default Homes;
