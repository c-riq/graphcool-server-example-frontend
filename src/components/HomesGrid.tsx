
import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';
import { Intent, Spinner } from '@blueprintjs/core';
import Home from './Home';

const HOMES_QUERY = gql`
  query homes($min: Int!, $max: Int!) {
    homesInPriceRange(min: $min, max: $max) {
      id
      perNight
      pictures {
        url
      }
      name
    }
  }
`;

type HomeData = {
  name: string;
};

type Response = {
  homesInPriceRange: Array<HomeData>;
};

type WrappedProps = Response & QueryProps;

type InputProps = {
  priceRange: Array<number>;
};


const withData = graphql<Response, InputProps, WrappedProps>(HOMES_QUERY, {
  options: ({ priceRange }) => ({
    variables: { min: priceRange[0], max: priceRange[1] },
  }),
  props: ({ data }) => ({ ...data }),
});

export default withData((response) => {
  console.log(response)
  if (response.loading) return <Spinner intent={Intent.PRIMARY} />;
  if (response.error) return <h1>{JSON.stringify(response.error)}</h1>;

  return (
    <div>
      <h1>Homes</h1>
      <div className="card-containter">
        {response.homesInPriceRange.map((home: any) => (
          <div key={home.id}>
            <Home data={home} />
          </div>
        ))}
      </div>
    </div>
  );
});





