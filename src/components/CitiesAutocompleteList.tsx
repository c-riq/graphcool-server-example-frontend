import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';

const CITY_QUERY = gql`
  query cities($searchString: String!) {
    autoCompleteCity(searchString: $searchString) {
      name
      id
    }
  }
`;

type Response = {
  autoCompleteCity: Array<any>;
};

type WrappedProps = Response & QueryProps;

type InputProps = {
  searchString: string;
  setCity: any;
};

const withData = graphql<Response, InputProps, WrappedProps>(CITY_QUERY, {
  options: ({ searchString }) => ({
    variables: { searchString: searchString },
  }),
  props: ({ data }) => ({ ...data }),
});

export default withData((response ,props )=> {
  console.log(props)
  if (response.loading) return <div />;
  const cities = response.autoCompleteCity
    .map(city => city.name)
    .filter((value, index, self) => self.indexOf(value) === index);
  return <div>{cities.map(city => <div key={city} style={{witdh:"100px"}} onClick={()=>props.setCity(city)}>{city}</div>)}</div>;
  //return <div><div key={cities[0]} style={{witdh:"100px"}} onClick={()=>props.setCity(cities[0])}>{cities[0]}</div></div>;
});
