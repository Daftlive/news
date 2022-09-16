import { StyleSheet, SafeAreaView } from "react-native";
import Router from "./app/navigation/router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

