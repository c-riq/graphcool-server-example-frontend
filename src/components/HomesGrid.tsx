import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';
import { Intent, Spinner } from '@blueprintjs/core';
import Home from './Home';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
`;

const CenterDiv = styled.div`
  padding: 100px;
  width: 100%;
  text-align: center;
`;

const CardContainer = styled.div`
  margin-left: 0px;
  margin-right: 100px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
`;

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
  perNight: number;
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
    variables: { min: priceRange[0], max: priceRange[1] }
  }),
  props: ({ data }) => ({ ...data })
});

export default withData(response => {
  if (response.loading) {return <CenterDiv> <Spinner intent={Intent.PRIMARY} /> </CenterDiv>; }
  if (response.error) {return <h1>{JSON.stringify(response.error)}</h1>; }

  return (
    <Wrapper>
      <h1>&nbsp;Homes</h1>
      <CardContainer>
        {response.homesInPriceRange.map((home: any) => (
          <div key={home.id}>
            <Home data={home} />
          </div>
        ))}
      </CardContainer>
    </Wrapper>
  );
});
