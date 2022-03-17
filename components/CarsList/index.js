import React from "react";

import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import Carsdata from "./Carsdata";
import Carditem from "../Carditem";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Carsdata}
        renderItem={({ item }) => <Carditem car={item} />}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};
export default CarsList;
