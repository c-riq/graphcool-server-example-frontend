import * as React from 'react';

import { NumberRange, RangeSlider } from '@blueprintjs/core';

interface Props {
  setPriceRange: (priceRange: any) => any;
}

export interface RangeSliderExampleState {
  range?: NumberRange;
  vertical?: boolean;
}

export class PriceFilter extends React.Component<Props> {
  public state: RangeSliderExampleState = {
    range: [0, 200],
    vertical: false
  };

  render() {
    return (
      <div style={{ width: '200px', margin: '5px' }}>
        <RangeSlider
          min={0}
          max={200}
          stepSize={1}
          labelStepSize={50}
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
  }
}
