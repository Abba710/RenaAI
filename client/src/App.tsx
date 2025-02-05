import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import LoadScreen from "./Activity/load";
import AuthScreen from "./Activity/auth";
export default function App() {
  return (
    <View className="flex-1 w-full h-full items-center justify-center">
      <StatusBar />
      <AuthScreen />
    </View>
  );
}
