import React from "react";
import { SafeAreaView } from "react-native";
import Calculator from "./components/Calculator";

export default function App() {
  return (
    <SafeAreaView style={{ marginTop: 125 }}>
      <Calculator total={0} percentage={0} />
    </SafeAreaView>
  );
}
