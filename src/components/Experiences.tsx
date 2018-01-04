import * as React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Experience from './Experience';
import { Intent, Spinner } from '@blueprintjs/core';
import styled from 'styled-components';
import Filterbar from './Filterbar';

const Wrapper = styled.div`
  margin-left: 50px;
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
        <Filterbar />
        <h1>Experiences</h1>
        <div className="card-containter">
          {this.props.data.topExperiences.map((experience: any) => (
            <div key={experience.id}>
              <Experience data={experience} />
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const HomesQuery = gql`
  query getTopExperiences {
    topExperiences {
      id
    }
  }
`;

const HomesWithData = graphql(HomesQuery)(Homes);

export default HomesWithData;
