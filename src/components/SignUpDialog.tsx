
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
}
interface SignupProps {
    mutate: any;
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
      }

 
    public render() {
        return (
            <div>
                <Button className="pt-minimal" onClick={this.toggleDialog}>Sign Up</Button>
                <Dialog
                    isOpen={this.state.isOpen}
                    onClose={this.toggleDialog}
                >
                    <div className="pt-dialog-body">
                        <input className="pt-input" type="text" placeholder="Email address" dir="auto" /><br />
                        <input type="text" value={this.state.email} onChange={this.handleChange} />
                        <input className="pt-input" type="text" placeholder="First name" dir="auto" /><br />
                        <input className="pt-input" type="text" placeholder="Last name" dir="auto" /><br />
                        <input className="pt-input" type="text" placeholder="Create a Password" dir="auto" /><br />
                    </div>
                    <div className="pt-dialog-footer">
                        <div className="pt-dialog-footer-actions">
                            <Button
                                intent={Intent.PRIMARY}
                                onClick={this.toggleDialog}
                                text="Sign up"
                            />
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
 
    private toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

  private handleChange(event: any) {
    this.setState({email: event.target.value});
  }

    public onSubmit() {
        this.props.mutate({
          variables: { repoFullName: 'apollographql/apollo-client' }
        })
          .then((data: any) => {
            console.log('got data', data);
          }).catch((error: any) => {
            console.log('there was an error sending the query', error);
          });
      }

}


const SIGNUP_MUTATION = gql`
mutation signup($email: String!, $firstName: String!, $lastName: String!, $password: String!, $phone: String! ) {
  signup(
    email: $email
    firstName: $firstName
    lastName: $lastName
    password: $password
    phone: $phone
  ) {
    user {
      id
    }
    token
  }
}
`;

const SignUpDialogWithMutation = graphql(SIGNUP_MUTATION)(SignUpDialog);


export default SignUpDialogWithMutation




