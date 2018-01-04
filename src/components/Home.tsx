import * as React from 'react';

interface props {
  data: any
}

export default (props:props) =>(<div>{props.data.id}</div>)
