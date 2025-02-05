import { StyleSheet, Text, View, Image } from "react-native";

const LoadScreen = () => {
  return (
    <View className="w-[375px] h-[812px] px-[19px] py-[237px] bg-[#2e332e] rounded-[40px] justify-center items-center gap-2.5 inline-flex overflow-hidden">
      <Image
        source={require("../img/Rena/rena.jpeg")}
        className="w-[337px] h-[337px] rounded-[256px]"
      />
    </View>
  );
};

export default LoadScreen;
