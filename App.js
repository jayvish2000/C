import { StyleSheet, View, StatusBar, LogBox } from "react-native";
import CarsList from "./components/CarsList";
import Header from "./components/Header";

LogBox.ignoreLogs(["Warning: ..."]);
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.maincontainer}>
      <Header />
      <CarsList />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
});
