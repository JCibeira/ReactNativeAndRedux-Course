import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import reducers from './reducers';
import RouterComponent from './Router';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

class App extends Component {
    componentWillMount() {
        const firebase = require('firebase');
        const config = {
            apiKey: 'AIzaSyDRBcK0FwMOa_ee8iFJ0cuTThZ0KmEnymY',
            authDomain: 'manager-c5648.firebaseapp.com',
            databaseURL: 'https://manager-c5648.firebaseio.com',
            projectId: 'manager-c5648',
            storageBucket: 'manager-c5648.appspot.com',
            messagingSenderId: '830754495936'
        }

        firebase.initializeApp(config);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
                <RouterComponent />
            </Provider>
        );
    }
};

export default App;