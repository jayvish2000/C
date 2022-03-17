import React from "react";
import { View, ImageBackground, Text } from "react-native";
import styles from "./styles";
import BtnStyles from "../ButtonStyle";

const Carditem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.BG} source={image}>
        <View style={styles.titleview}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline} {""}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>
        <View style={styles.btncontainer}>
          <BtnStyles
            type="primary"
            content={"Custom Order"}
            // onPress={()=>}
          />
          <BtnStyles
            type="secondary"
            content={"Existing Inventory"}
            // onPress={()=>}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Carditem;
