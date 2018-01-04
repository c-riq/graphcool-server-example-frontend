import * as React from 'react';

interface props {
  data: any
}

export default (props:props) =>(
	<div className="pt-card pt-elevation-1 pt-interactive" style={{width:"100px", padding:"0px"}}>
	<img src={props.data.pictures[0].url} style={{width:"100px"}}/>
    <h5><a href="#">{props.data.name}</a></h5>
  	</div>
)
