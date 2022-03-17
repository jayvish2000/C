import React from "react";
import { View, Image } from "react-native";
import styles from "../Header/styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/T.png")} />
      <Image style={styles.logo} source={require("../../assets/M.png")} />
    </View>
  );
};

export default Header;
