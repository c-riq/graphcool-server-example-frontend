import * as React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Home from './Home'
import { Intent, Spinner } from "@blueprintjs/core";



interface Props {
  data: any
}

class Homes extends React.Component<Props>{
	render() {
		if(this.props.data.loading) return (<div><Spinner intent={Intent.PRIMARY} /></div>)
     return (
         <div>
         {this.props.data.topHomes.map((home: any) => (
           <div key={home.id}>
             <Home data={home} />
           </div>
           )
         )
       }
         </div>
    );
 }
}

const HomesQuery = gql`
   query getTopHomes {
   	topHomes{
     id 
   	}
   }
 `;

const HomesWithData = graphql(HomesQuery)(Homes);

export default  HomesWithData