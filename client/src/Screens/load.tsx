import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type LoadScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LoadScreen"
>;

const LoadScreen = () => {
  const navigation = useNavigation<LoadScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  }, []);

  return (
    <View className="w-[377px] h-[814px] px-[19px] py-[237px] bg-[#2e332e] justify-center items-center gap-2.5 inline-flex overflow-hidden">
      <Image
        source={require("../img/Rena/rena-big.jpg")}
        className="w-[337px] h-[337px] rounded-[256px]"
      />
    </View>
  );
};

export default LoadScreen;
