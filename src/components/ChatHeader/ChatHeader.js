import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { signIn, signOut } from '../../containers/App/actions';

class ChatHeader extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.onAuthChange(user);
        });
    }

    onAuthChange = user => {
        if (user) {
            this.props.signIn(user);
        } else {
            this.props.signOut();
        }
    };

    handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    handleSignOut = () => {
        firebase.auth().signOut();
    };

    renderAuthButton() {
        switch (this.props.isSignedIn) {
            case true: {
                return (
                    <Button onClick={this.handleSignOut} color="google plus">
                        <Icon name="google" /> Sign Out
                    </Button>
                );
            }
            case false: {
                return (
                    <Button onClick={this.handleSignIn} color="google plus">
                        <Icon name="google" /> Sign In
                    </Button>
                );
            }
            default:
                return null;
        }
    }

    render() {
        return (
            <div>
                <Segment>
                    <Header as="h3" textAlign="right">
                        {this.renderAuthButton()}
                    </Header>
                </Segment>
                <Header as="h2" icon textAlign="center" style={{ paddingBottom: '1.4em' }}>
                    <Icon name="users" circular />
                    <Header.Content>Chat Room | Friends</Header.Content>
                </Header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.app.isSignedIn,
    };
};

export default connect(
    mapStateToProps,
    {
        signIn,
        signOut,
    }
)(ChatHeader);
