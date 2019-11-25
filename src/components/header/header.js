import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ImageBackground,
  FlatList
} from "react-native";
import { Close } from "../../theme/Images";
import type from "../../theme/Fonts";

export const Header = ({ goback, title }) => {
  return (
    <SafeAreaView style={{backgroundColor:"#78822C"}}>
    <View
      style={{
        height: 60,
        backgroundColor: "#78822C",
        width: "100%",
        // marginTop: 30,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center"
      }}
    >
      <TouchableOpacity onPress={goback}>
        <Image
          source={Close}
          style={{ width: 22, height: 22, marginRight: 12 }}
        />
      </TouchableOpacity>
      <Text style={{ color: "white", fontSize: 28, fontFamily: type.bold }}>
        {title}
      </Text>
    </View></SafeAreaView>
  );
};
