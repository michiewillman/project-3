import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <View>
      <Text>Nice! Support for Google Fonts!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    // fontFamily: "Roboto_400Regular",
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: 0.05,
  },
  baseText: {
    // fontFamily: "Roboto",
    letterSpacing: 2,
  },
});
