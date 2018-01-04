import * as React from 'react';

interface props {
  data: any;
}

export default (props: props) => (
  <div
    className="pt-card pt-elevation-1 pt-interactive"
    style={{ width: '200px', padding: '0px' }}
  >
    <div style={{ width: '200px' }} />
    <h5>
      <p>{props.data.id}</p>
    </h5>
  </div>
);
