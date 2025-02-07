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
import {
  Menu,
  Edit3,
  Languages,
  Mic,
  Send,
  SearchIcon,
} from "lucide-react-native";

type Message = {
  text: string;
  time: Date;
  isAi: boolean;
};

const exampleMessages: Message[] = [
  {
    text: "Hello Rena chan, How are you today?",
    time: new Date(),
    isAi: false,
  },
  {
    text: "Hello Sempai~! 🥰✨ I'm feeling super cute and ready to help you! 💖💡 How about you, Sempai? 😘🌸🎀",
    time: new Date(),
    isAi: true,
  },
  {
    text: "What is the best programming language?",
    time: new Date(),
    isAi: false,
  },
  {
    text: "Oh, Sempai~! 💖 Of course, it's JavaScript! ✨ So flexible, so fun~ 🎀 Perfect for making cute things on the web! 😘💻💕",
    time: new Date(),
    isAi: true,
  },
  { text: "Thank you Rena chan!", time: new Date(), isAi: false },
  {
    text: "Aww~ You're welcome, Sempai! 😘💕 Anytime for you~ ✨🎀💖",
    time: new Date(),
    isAi: true,
  },
];

const HomeScreen = () => {
  // Input settings
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>(exampleMessages);
  const MAX_LENGTH = 250;
  const [backPressed, setBackPressed] = useState(false);
  const [inputHeight, setInputHeight] = useState(40);

  // Send message
  const handleSend = (message: string, isAi: boolean) => {
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
            <Menu size={24} color="#000" />
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

      {/* Tips */}
      <View className="flex-1">
        {/* Tips - displayed if there are no messages */}
        {messages.length === 0 && (
          <View className="flex-1">
            <ScrollView
              className="flex-1 px-4"
              showsVerticalScrollIndicator={false}
            >
              {/* Explain Section */}
              <View className="py-6">
                <View className="items-center mb-4">
                  <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mb-1">
                    <SearchIcon size={20} color="#666" />
                  </View>
                  <Text className="text-sm font-semibold">Explain</Text>
                </View>

                <View className="gap-2">
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() => handleSend("Explain Quantum physics", false)}
                  >
                    <Text className="text-center text-gray-700">
                      Explain Quantum physics
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend(
                        "What are wormholes explain like i am 5",
                        false
                      )
                    }
                  >
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
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend("Write a tweet about global warming", false)
                    }
                  >
                    <Text className="text-center text-gray-700">
                      Write a tweet about global warming
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend("Write a poem about flower and love", false)
                    }
                  >
                    <Text className="text-center text-gray-700">
                      Write a poem about flower and love
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend("Write a rap song lyrics about", false)
                    }
                  >
                    <Text className="text-center text-gray-700">
                      Write a rap song lyrics about
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Translate Section */}
              <View className="py-6 mb-[100px]">
                <View className="items-center mb-4">
                  <View className="w-10 h-10 rounded-full bg-gray-50 items-center justify-center mb-1">
                    <Languages size={20} color="#666" />
                  </View>
                  <Text className="text-sm font-semibold">Translate</Text>
                </View>
                <View className="gap-2">
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend(
                        "How do you say 'how are you' in korean?",
                        false
                      )
                    }
                  >
                    <Text className="text-center text-gray-700">
                      How do you say "how are you" in korean?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="bg-gray-50 p-4 rounded-3xl"
                    onPress={() =>
                      handleSend(
                        "Translate this sentence to spanish: 'I love you'",
                        false
                      )
                    }
                  >
                    <Text className="text-center text-gray-700">
                      Translate this sentence to spanish: 'I love you'
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        )}

        {/* Messages - displayed if there are messages */}
        {messages.length > 0 && (
          <ScrollView
            className="flex-1 px-4 py-2 mb-[100px]"
            showsVerticalScrollIndicator={false}
          >
            {messages.map((message, index) => (
              <View
                key={index}
                className={`max-w-[80%] rounded-tl-[25px] rounded-bl-[25px] rounded-br-[25px] gap-2.5 px-4 py-3 ${
                  message.isAi
                    ? "bg-[#EEEEEE] self-start rounded-tl-[0] rounded-tr-[25px]"
                    : "bg-[#2e332e] self-end"
                } mb-2`}
              >
                <Text
                  className={`text-base font-nunito ${
                    message.isAi ? "text-black" : "text-white"
                  }`}
                >
                  {message.text}
                </Text>
                <Text
                  className={`text-xs mt-1 self-end ${
                    message.isAi ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {message.time.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>

      {/* Bottom Input */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <View className="flex-row items-center bg-white rounded-3xl px-4 py-3 shadow-xl">
          <TextInput
            className="text-gray-600 flex-1"
            placeholder="Hello Rena chan, How are you today?"
            placeholderTextColor="#666"
            value={message}
            onChangeText={(text) => {
              if (text.length <= MAX_LENGTH) {
                setMessage(text);
              }
            }}
            multiline
            maxLength={MAX_LENGTH}
            onContentSizeChange={handleContentSizeChange}
            style={{
              minHeight: 40,
              maxHeight: 200,
              paddingTop: 10,
              paddingBottom: 10,
              textAlignVertical: "center",
            }}
          />
          <TouchableOpacity>
            <Mic size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSend(message, false)}
            disabled={!message.trim()}
          >
            <Send size={25} color={message.trim() ? "#0084ff" : "black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
