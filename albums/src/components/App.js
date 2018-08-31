import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

const App = () => (
    <View style= {{ flex: 1 }}>
        <Header headerText={ 'Albums' }/>
        <AlbumList />
    </View>
);

export default App;