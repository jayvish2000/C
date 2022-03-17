import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 50,
    elevation: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  logo: {
    width: 90,
    height: 20,
    resizeMode: "contain",
    marginLeft: 4,
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});
export default styles;
