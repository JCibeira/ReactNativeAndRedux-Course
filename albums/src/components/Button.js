import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({onPress, children}) => {
    const { textStyle, buttonStyle } = styles;

    return (
    	<TouchableOpacity style={buttonStyle} onPress={ onPress }>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007AFF',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;