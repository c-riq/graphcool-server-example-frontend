import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homes from './components/Homes';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const HomeTheme = styled.section`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif;
`;

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
}

class App extends React.Component<{}, Props> {
  constructor(props: any) {
    super(props);
    this.loginApp = this.loginApp.bind(this);
    this.logoutApp = this.logoutApp.bind(this);
    if (!localStorage.getItem('coolbnb_user')) {
      this.state = { firstName: '', lastName: '', email: '' };
      return;
    }
    const user = String(localStorage.getItem('coolbnb_user'));
    const { email, firstName, lastName } = JSON.parse(user);
    this.state = { email, firstName, lastName };
  }

  loginApp(user: UserData) {
    window.localStorage.setItem('coolbnb_user', JSON.stringify(user));
    const { firstName, lastName, email } = user;
    this.setState({ firstName, lastName, email });
  }

  logoutApp(user: UserData) {
    window.localStorage.setItem('coolbnb_user', '');
    this.setState({ firstName: '', lastName: '', email: '' });
  }

  render() {
    return (
      <HomeTheme>
        <Navbar
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          loginApp={this.loginApp}
          logoutApp={this.logoutApp}
        />
        <Router>
          <div className="App">
            <Route exact={true} path="/" component={Homes} />
          </div>
        </Router>
      </HomeTheme>
    );
  }
}

export default App;
