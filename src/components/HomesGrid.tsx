import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, QueryProps } from 'react-apollo';
import { Intent, Spinner } from '@blueprintjs/core';
import HomeCard from './HomeCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row nowrap;
  align-content: flex-end;
`;

const CenterDiv = styled.div`
  padding: 100px;
  width: 100%;
  text-align: center;
`;

const CardContainer = styled.div`
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
      name
      pictures {
        url
      }
      location {
        lat
        lng
      }
    }
  }
`;

type Response = {
  homesInPriceRange: Array<any>;
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

export default withData(response => {
  if (response.loading) {
    return (
      <CenterDiv>
        {' '}
        <Spinner intent={Intent.PRIMARY} />{' '}
      </CenterDiv>
    );
  }
  if (response.error) {
    return <h1>{JSON.stringify(response.error)}</h1>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <h1>&nbsp;Homes</h1>
      </div>
      <Wrapper>
        <CardContainer>
          {response.homesInPriceRange.map((home: any) => (
            <div key={home.id}>
              <HomeCard data={home} />
            </div>
          ))}
        </CardContainer>
        <div style={{ width: '400px' }}>
          map{response.homesInPriceRange.map((home: any) => (
            <div key={home.id}>
              {'home coordinates: ' +
                home.location.lat +
                ', ' +
                home.location.lng}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
});
