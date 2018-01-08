import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homes from './components/Homes';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const HomeTheme = styled.section`
  background: #ffffff;
`;


class App extends React.Component {
  render() {
    return (
      <HomeTheme>
        <Navbar />
        <Router>
          <div className="App">
            <Route exact path="/" component={Homes} />
            <Route exact path="/s/experiences" component={Experiences} />
          </div>
        </Router>
      </HomeTheme>
    );
  }
}

export default App;
