import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import memuatFont from "../hooks/frontend/useLoadFont";

export default function Index() {
  const bgImage = require("@/assets/images/bgmasuk.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const [fadeAnim] = useState(new Animated.Value(0));
  const [bounceAnim] = useState(new Animated.Value(0));
  const [fadeAnimText] = useState(new Animated.Value(0));
  const [fadeAnimButton] = useState(new Animated.Value(0));

  const [bgFadeAnim] = useState(new Animated.Value(0));

  const handleNavigate = () => {
    router.push("/beranda");
  };

  useEffect(() => {
    Animated.timing(bgFadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.spring(bounceAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 1000,
      delay: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  return (
    <Animated.View style={{ flex: 1, opacity: bgFadeAnim }}>
      <ImageBackground
        source={bgImage}
        className="flex-1 bg-white"
        resizeMode="cover"
      >
        <View className="flex-1 justify-center items-center">
          <Animated.Text
            className="text-6xl pt-3"
            style={{
              fontFamily: "MoresugarR",
              opacity: fadeAnim,
              transform: [
                {
                  translateX: bounceAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-200, 0],
                  }),
                },
              ],
            }}
          >
            Brightpath
          </Animated.Text>

          <Animated.Text
            className="text-xl"
            style={{
              fontFamily: "QuicksandB",
              opacity: fadeAnimText,
            }}
          >
            Inspirasi untuk Hidup Lebih Baik
          </Animated.Text>

          <Animated.View
            style={{
              opacity: fadeAnimButton,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-orange-500 px-14 py-2 rounded-full mt-4"
              onPress={handleNavigate}
            >
              <Text
                className="text-lg text-white text-center"
                style={{ fontFamily: "QuicksandB" }}
              >
                Masuk
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}
