import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Home from './Home';
import { Intent, Spinner } from '@blueprintjs/core';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 200px;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: left;
  color: #fd5c63;
`;

interface Props {
  data: any;
}

class Homes extends React.Component<Props> {
  render() {
    if (this.props.data.loading)
      return (
        <Wrapper>
          <Spinner intent={Intent.PRIMARY} />
        </Wrapper>
      );
    return (
      <Wrapper>
        <Title>CoolBnB</Title>
        <h1>Homes</h1>
        <div className="card-containter">
          {this.props.data.topHomes.map((home: any) => (
            <div key={home.id}>
              <Home data={home} />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const HomesQuery = gql`
  query getTopHomes {
    topHomes {
      id
      name
      pictures {
        url
      }
    }
  }
`;

const HomesWithData = graphql(HomesQuery)(Homes);

export default HomesWithData;
