import React from "react";
import { Pressable, View, Text } from "react-native";
import styles from "./styles";

function BtnStyles(props) {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textcolor = type === "primary" ? "#FFFFFF" : "#171A20";
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.btn, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}

export default BtnStyles;
