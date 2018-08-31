import React, {Component} from 'react';
import { FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem'

class LibraryList extends Component {
    renderItem({item, index}) {
        return <ListItem library={item}/>;
    }
    
    render() {
        return (
            <FlatList 
                data={this.props.libraries} 
                renderItem={({item, index}) => this.renderItem({item, index})}
                keyExtractor={ library => library.id.toString()}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps) (LibraryList);