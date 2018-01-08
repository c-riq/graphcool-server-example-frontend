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

interface AppState {
  firstName: string;
  lastName: string;
  email: string;
}

class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.loginApp = this.loginApp.bind(this);
    if (!localStorage.getItem('coolbnb_user')) {
      this.state = {firstName : '', lastName: '', email: ''};
      return;
    }
    const user = String(localStorage.getItem('coolbnb_user'));
    console.log(user)
    const { email, firstName, lastName } = JSON.parse(user).data.signup.user;
    this.state = {email, firstName, lastName}
  }

  loginApp(email: string = '', firstName: string = '', lastName: string): void {
    this.setState({ email: email, firstName: firstName, lastName: lastName });
  }

  render() {
    return (
      <HomeTheme>
        <Navbar firstName={this.state.firstName} 
                lastName={this.state.lastName} 
                email={this.state.email} 
                loginApp={this.loginApp} />
        <Router>
          <div className="App">
            <Route
              exact
              path="/" component={Homes}
            />
            <Route exact path="/s/experiences" component={Experiences} />
          </div>
        </Router>
      </HomeTheme>
    );
  }
}

export default App;
