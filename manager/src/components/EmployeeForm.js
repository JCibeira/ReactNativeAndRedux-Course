import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
    onNameChange(text) {
        this.props.employeeUpdate({ prop: 'name', value: text });
    }

    onPhoneChange(text) {
        this.props.employeeUpdate({ prop: 'phone', value: text });
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jonh Doe"
                        onChangeText={this.onNameChange.bind(this)}
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="+55(555)5555555"
                        onChangeText={this.onPhoneChange.bind(this)}
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.containerStyle}>
                        <Text style={styles.pickerTextStyle}>Shift</Text>
                        <Picker
                            style={styles.pickerStyle}
                            selectedValue={this.props.shift}
                            onValueChange={ value => this.props.employeeUpdate({ prop: 'shift', value })}
                        >
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 15,
        flex: 1
    },
    pickerStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift, };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);