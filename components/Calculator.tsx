import React from "react";
import { View } from "react-native";
import LargeTextInput from "./LargeTextInput";
import ResultText from "./ResultText";

export interface CalculatorState {
  total: number;
  percentage: number;
}

class Calculator extends React.Component<CalculatorState> {
  state = { total: 0, percentage: 0 };

  handleTotalChangeText = (value: number) => {
    this.setState({ total: value });
  };

  handlePercentageChangeText = (value: number) => {
    this.setState({ percentage: value });
  };

  render() {
    return (
      <View>
        <LargeTextInput
          placeholder="25"
          footnote="Total"
          onChangeText={this.handleTotalChangeText}
        />
        <LargeTextInput
          placeholder="15"
          footnote="Percentage"
          onChangeText={this.handlePercentageChangeText}
        />
        <ResultText
          total={this.state.total}
          percentage={this.state.percentage}
        />
      </View>
    );
  }
}

export default Calculator;
