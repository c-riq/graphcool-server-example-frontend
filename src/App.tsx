import * as React from "react";
import "./App.css";
import Homes from "./components/Homes";
import Navbar from "./components/Navbar";
import styled from 'styled-components';

const HomeTheme = styled.section`
  padding: 4em;
  background: #ffffff;
`;

class App extends React.Component {
  render() {
    return (
	<HomeTheme>
	<Navbar />
      <div className="App">
        <Homes />
      </div>
      </HomeTheme>
    );
  }
}

export default App;
