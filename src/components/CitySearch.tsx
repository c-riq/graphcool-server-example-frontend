import { Popover, Position } from '@blueprintjs/core';
import * as React from 'react';
import CitiesAutocompleteList from './CitiesAutocompleteList';

interface SearchState {
  searchString: string;
}

class CitySearch extends React.Component<{}, SearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchString: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.setCity = this.setCity.bind(this);
  }
  handleChange(event: any) {
    this.setState({ searchString: event.target.value });
  }
  setCity(city:string){
    this.setState({ searchString: city });
  }

  render() {
    return (
      <div>
        <Popover
          position={Position.BOTTOM_LEFT}
          autoFocus={false}
          popoverClassName="pt-popover-content-sizing"
          content={<CitiesAutocompleteList searchString={this.state.searchString} setCity={this.setCity}/>}
          target={
            <div className="pt-input-group pt-large">
              <span className="pt-icon pt-icon-search" />
              <input
                className="pt-input"
                type="search"
                placeholder="Search by city"
                dir="auto"
                onChange={event => this.handleChange(event)}
              />
            </div>
          }
        />
      </div>
    );
  }
}

export default CitySearch;
