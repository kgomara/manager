import React, { Component } from "react";
import { connect } from "react-redux";
import { Picker, Text } from "react-native";

import { Card, CardSection, Input, Button } from "./common";
import { employeeUpdate, employeeCreate } from "../actions";

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    console.log(name, phone, shift);

    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeHolder="Jane Doe"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeHolder="555-555-1212"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
