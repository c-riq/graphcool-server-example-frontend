import { Button, Dialog, Intent } from '@blueprintjs/core';
import * as React from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

interface SignupState {
  isOpen: boolean;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  error?: string;
}
interface SignupProps {
  mutate: any;
  loginApp: any;
}

class SignUpDialog extends React.Component<SignupProps, SignupState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public render() {
    return (
      <div>
        <Button className="pt-minimal" onClick={this.toggleDialog}>
          Sign Up
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
              placeholder="First name"
              type="text"
              value={this.state.firstName}
              onChange={event => this.handleChange(event, 'firstName')}
            />
            <br />
            <input
              className="pt-input"
              placeholder="Last name"
              type="text"
              value={this.state.lastName}
              onChange={event => this.handleChange(event, 'lastName')}
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
            <input
              className="pt-input"
              placeholder="Phone Number"
              type="text"
              value={this.state.phone}
              onChange={event => this.handleChange(event, 'phone')}
            />
            <br />
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <span>{this.state.error && this.state.error}</span>
              <Button
                intent={Intent.PRIMARY}
                onClick={this.onSubmit}
                text="Sign up"
              />
            </div>
          </div>
        </Dialog>
      </div>
    );
  }

  public onSubmit() {
    const { email, lastName, firstName, password, phone } = this.state;
    this.props
      .mutate({
        variables: { email, lastName, firstName, password, phone },
      })
      .then((data: any) => {
        this.setState({ password: '' });
        const { email, firstName, lastName } = data.data.signup.user;
        const token = data.data.signup.token;
        this.props.loginApp({ email, firstName, lastName, token });
        this.setState({ isOpen: false });
      })
      .catch((error: any) => {
        this.setState({
          error: 'Signup error',
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

const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $phone: String!
  ) {
    signup(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      phone: $phone
    ) {
      user {
        id
        firstName
        lastName
      }
      token
    }
  }
`;

export interface InputProps {
  loginApp: any;
}

const withMutation = graphql<{}, InputProps>(SIGNUP_MUTATION);

export default withMutation(SignUpDialog);
