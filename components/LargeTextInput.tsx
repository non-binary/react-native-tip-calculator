import React from "react";
import { View, TextInput, Text } from "react-native";

export interface LargeTextInputProps {
  placeholder: string;
  footnote: string;
  onChangeText: (value: number) => void;
}

export default class LargeTextInput extends React.Component<LargeTextInputProps> {
  render() {
    const {
      placeholder,
      footnote,
      onChangeText,
    }: {
      placeholder: string;
      footnote: string;
      onChangeText: (value: number) => void;
    } = this.props;

    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{ fontSize: 80, fontWeight: "bold" }}
          placeholder={placeholder}
          onChangeText={(value) => onChangeText(Number(value))}
        />
        <Text>{footnote}</Text>
      </View>
    );
  }
}
