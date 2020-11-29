import React from "react";
import { View, Text } from "react-native";

export interface ResultTextProps {
  total: number;
  percentage: number;
}

export default class ResultText extends React.Component<ResultTextProps> {
  calculateResult(): string {
    const {
      total,
      percentage,
    }: { total: number; percentage: number } = this.props;

    if (total == 0 || percentage == 0) {
      return "Zilch";
    }

    return (this.props.total * (this.props.percentage / 100)).toString();
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text
          style={{ fontSize: 80, fontWeight: "bold", color: "#3D70B9" }}
          numberOfLines={1}
        >
          {this.calculateResult()}
        </Text>
        <Text>Proposed Tip</Text>
      </View>
    );
  }
}
