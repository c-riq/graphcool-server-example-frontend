import * as React from 'react';

import { NumberRange, RangeSlider } from '@blueprintjs/core';

interface Props {
  setPriceRange: (priceRange: any) => any;
}

export interface IRangeSliderExampleState {
  range?: NumberRange;
  vertical?: boolean;
}

export class PriceFilter extends React.Component<Props> {
  public state: IRangeSliderExampleState = {
    range: [0, 200],
    vertical: false,
  };

  render() {
    return (
      <div style={{ width: '400px' }}>
        Price per night $
        <RangeSlider
          min={0}
          max={200}
          stepSize={1}
          labelStepSize={20}
          onChange={this.handleValueChange}
          onRelease={this.props.setPriceRange}
          value={this.state.range}
          vertical={this.state.vertical}
        />
      </div>
    );
  }

  private handleValueChange = (range: NumberRange) => {
    this.setState({ range });
  };
}
