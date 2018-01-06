import * as React from 'react';

interface props {
  data: any;
}

export default (props: props) => (
  <div
    className="pt-card pt-elevation-1 pt-interactive"
    style={{ width: '300px', margin: '10px', padding: '0px' }}
  >
    <img src={props.data.pictures[0].url} style={{ 'max-width': '100%' }} />
    <h5>
      <p>{props.data.name}</p>
      <p>${props.data.perNight}</p>
    </h5>
  </div>
);
