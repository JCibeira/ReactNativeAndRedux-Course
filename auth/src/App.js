import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Header, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    initFirebase() {
        const firebase = require('firebase');
        firebase.initializeApp({
            apiKey: 'AIzaSyCJC5urZMy7-dNlFzhS8T6C8iQXWxDP750',
            authDomain: 'auth-1cf96.firebaseapp.com',
            databaseURL: 'https://auth-1cf96.firebaseio.com',
            projectId: 'auth-1cf96',
            storageBucket: 'auth-1cf96.appspot.com',
            messagingSenderId: '614702573925'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user)
                this.setState({ loggedIn: true });
            else
                this.setState({ loggedIn: false });
        });
    }

    componentWillMount() {
        this.initFirebase();
    }

    renderContent() {
        const firebase = require('firebase');

        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>
                                Log Out
                            </Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner/>;
        }
    }

    render() {
        return (
            <View>
                <Header headerText={ 'Authentication' }/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;