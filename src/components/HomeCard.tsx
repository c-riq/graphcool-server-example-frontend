import * as React from 'react';

interface Props {
  data: any;
}

export default (props: Props) => (
  <div
    className="pt-card pt-elevation-1 pt-interactive"
    style={{ width: '300px', margin: '10px', padding: '0px' }}
  >
    <img src={props.data.pictures[0].url} style={{ maxWidth: '100%' }} />
    <h5>
      <p>{props.data.name}</p>
      <p>From ${props.data.perNight} per night</p>
    </h5>
  </div>
);
