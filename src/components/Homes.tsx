import * as React from 'react';
import HomesGrid from './HomesGrid';

import Filterbar from './Filterbar';

interface Props {
  loginApp?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
}

interface State {
  priceRange: Array<number>;
}

class Homes extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      priceRange: [0, 200]
    };
    this.setPriceRange = this.setPriceRange.bind(this);
  }

  setPriceRange(priceRange: Array<number>) {
    this.setState({ priceRange: priceRange });
  }

  render() {
    return (
      <div>
        <Filterbar setPriceRange={this.setPriceRange} />
        <HomesGrid priceRange={this.state.priceRange} />
      </div>
    );
  }
}

export default Homes;
