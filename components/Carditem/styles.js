import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titleview: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5c62",
  },
  BG: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  btncontainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
