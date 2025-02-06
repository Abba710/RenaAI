import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
  TextInput,
} from "react-native";
import { Menu, Edit3, Languages, Mic, Send } from "lucide-react-native";

const HomeScreen = () => {
  // Input settings
  const [message, setMessage] = useState("");
  const MAX_LENGTH = 250;
  const [backPressed, setBackPressed] = useState(false);
  const [inputHeight, setInputHeight] = useState(40);

  // Send message
  const handleSend = (message: string) => {
    if (!message.trim()) {
      return; // don't send empty messages
    }
    console.log("Sent:", message);
    setMessage("");
    setInputHeight(40);
  };

  // Back button
  const handleBackPress = () => {
    if (backPressed) {
      BackHandler.exitApp();
    } else {
      setBackPressed(true);
      ToastAndroid.show(
        "Click again to exit the application",
        ToastAndroid.SHORT
      );

      setTimeout(() => setBackPressed(false), 2000);
    }

    return true;
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [backPressed]);

  // Processor of changes in the size of the contents
  const handleContentSizeChange = (event: any) => {
    const { height } = event.nativeEvent.contentSize;
    setInputHeight(Math.min(height, 200));
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 mt-[10px] pt-6 pb-4 flex-row items-center justify-between border-b border-gray-100">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <Menu size={42} color="#000" />
          </TouchableOpacity>
          <View className="flex-row ml-[5px] items-center gap-2">
            <Image
              className="w-[63px] h-[63px] rounded-full"
              source={require("../img/Rena/rena-chan.jpg")}
            />
            <View>
              <Text className="text-[20px] font-semibold">Rena chan</Text>

              <View className="flex-row items-center gap-1">
                <View className="w-2 h-2 rounded-full bg-green-500" />
                <Text className="text-sm text-green-500">Online</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row gap-4 mr-[15px]">
          <TouchableOpacity>
            <Image
              source={require("../img/Phone call.png")}
              className="w-[24px] h-[24px]"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../img/Video.png")}
              className="w-[24px] ml-[10px] h-[24px]"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
        {/* Explain Section */}
        <View className="py-6">
          <View className="items-center mb-4">
            <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mb-1">
              <Menu size={20} color="#666" />
            </View>
            <Text className="text-sm font-semibold">Explain</Text>
          </View>
          <View className="gap-2">
            <TouchableOpacity
              className="bg-gray-50 p-4 rounded-3xl"
              onPress={() => {
                handleSend("Explain Quantum physics");
              }}
            >
              <Text className="text-center text-gray-700">
                Explain Quantum physics
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                What are wormholes explain like i am 5
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Write & Edit Section */}
        <View className="py-6">
          <View className="items-center mb-4">
            <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mb-1">
              <Edit3 size={20} color="#666" />
            </View>
            <Text className="text-sm font-semibold">Write & edit</Text>
          </View>
          <View className="gap-2">
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                Write a tweet about global warming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                Write a poem about flower and love
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                Write a rap song lyrics about
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Translate Section */}
        <View className="py-6">
          <View className="items-center mb-4">
            <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mb-1">
              <Languages size={20} color="#666" />
            </View>
            <Text className="text-sm font-semibold">Translate</Text>
          </View>
          <View className="gap-2">
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                How do you say "how are you" in korean?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 p-4 rounded-3xl">
              <Text className="text-center text-gray-700">
                Write a poem about flower and love
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Input */}
      <View className="px-4 py-4 border-t border-gray-100">
        <View className="flex-row items-center bg-white rounded-3xl px-4 py-3 shadow-sm">
          <View className="flex-1">
            <View
              style={{
                minHeight: inputHeight, // min height
                maxHeight: 200, // max height
              }}
            >
              <TextInput
                className="text-gray-600 overflow-auto"
                placeholder="Hello Rena chan, How are you today?"
                placeholderTextColor="#666"
                value={message}
                onChangeText={(text) => {
                  if (text.length <= MAX_LENGTH) {
                    setMessage(text);
                  }
                }}
                multiline
                numberOfLines={10} // number of lines:D
                maxLength={MAX_LENGTH}
                onContentSizeChange={handleContentSizeChange} // Size change listener
                style={{
                  height: inputHeight, // Dynamic height
                  paddingTop: 10,
                  paddingBottom: 10,
                  textAlignVertical: "center", // Text alignment
                }}
              />
              {message.length > 0 && (
                <Text className="text-xs text-gray-400 mt-1">
                  {message.length}/{MAX_LENGTH}
                </Text>
              )}
            </View>
          </View>
          <View className="flex-row gap-2 ml-2">
            <TouchableOpacity>
              <Mic size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSend(message)}
              disabled={!message.trim()}
            >
              <Send size={25} color={message.trim() ? "#0084ff" : "black"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
