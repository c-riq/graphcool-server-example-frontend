import { Button, Dialog, Intent } from '@blueprintjs/core';
import * as React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

interface SignupState {
  isOpen: boolean;
  email: string;
  password: string;
  error?: string;
}
interface SignupProps {
  mutate: any;
  loginApp?: any;
}

class SignUpDialog extends React.Component<SignupProps, SignupState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <div>
        <Button className="pt-minimal" onClick={this.toggleDialog}>
          Login
        </Button>
        <Dialog isOpen={this.state.isOpen} onClose={this.toggleDialog}>
          <div className="pt-dialog-body">
            <input
              className="pt-input"
              placeholder="Email address"
              type="text"
              value={this.state.email}
              onChange={event => this.handleChange(event, 'email')}
            />
            <br />
            <input
              className="pt-input"
              placeholder="Create a Password"
              type="text"
              value={this.state.password}
              onChange={event => this.handleChange(event, 'password')}
            />
            <br />
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <span>{this.state.error && this.state.error}</span>
              <Button
                intent={Intent.PRIMARY}
                onClick={this.onSubmit}
                text="Login"
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }

  public onSubmit() {
    const { email, password } = this.state;
    this.props
      .mutate({
        variables: { email, password },
      })
      .then((data: any) => {
        this.setState({ password: '' });
        const { email, firstName, lastName } = data.data.login.user;
        const token = data.data.login.token;
        this.props.loginApp({ email, firstName, lastName, token });
        this.setState({ isOpen: false });
      })
      .catch((error: any) => {
        this.setState({
          error: 'Login unsuccessfull! Please check email and password!',
        });
      });
  }

  private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

  private handleChange(event: any, key: string) {
    const state = {};
    state[key] = event.target.value;
    this.setState(state);
  }
}

const LOGIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        firstName
        lastName
        email
      }
      token
    }
  }
`;

export interface InputProps {
  loginApp?: any;
}

const withMutation = graphql<{}, InputProps>(LOGIN_MUTATION);

export default withMutation(SignUpDialog);
