import * as React from 'react';

interface props {
  data: any;
}

export default (props: props) => (
  <div
    className="pt-card pt-elevation-1 pt-interactive"
    style={{ width: '200px', padding: '0px' }}
  >
    <img src={props.data.pictures[0].url} style={{ width: '200px' }} />
    <h5>
      <p>{props.data.name}</p>
    </h5>
  </div>
);
