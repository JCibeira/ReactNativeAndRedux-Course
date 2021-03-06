import React, {Component} from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;
        return (
            <CardSection>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        color: '#000',
        paddingLeft: 15,
        fontSize: 18,
    }
};

export default ListItem;