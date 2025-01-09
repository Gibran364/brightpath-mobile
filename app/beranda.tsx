import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";
import memuatFont from "../hooks/frontend/useLoadFont";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const bgImage = require("@/assets/images/bgberanda.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const [fadeAnimText] = useState(new Animated.Value(0));
  const [fadeAnimButton1] = useState(new Animated.Value(0));
  const [fadeAnimButton2] = useState(new Animated.Value(0));
  const [fadeAnimButton3] = useState(new Animated.Value(0));
  const [fadeAnimButton4] = useState(new Animated.Value(0));
  const [fadeAnimButton5] = useState(new Animated.Value(0));

  const handleMKuliah = () => {
    router.push("/mkuliah");
  };

  const handleMKehidupan = () => {
    router.push("/mkehidupan");
  };

  const handleMKBisnis = () => {
    router.push("/mbisnis");
  };

  const handleMHealth = () => {
    router.push("/mhealth");
  };

  const handleTips = () => {
    router.push("/tipsharian");
  };

  useEffect(() => {
    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton1, {
      toValue: 1,
      duration: 600,
      delay: 800,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton2, {
      toValue: 1,
      duration: 600,
      delay: 900,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton3, {
      toValue: 1,
      duration: 600,
      delay: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton4, {
      toValue: 1,
      duration: 600,
      delay: 1100,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimButton5, {
      toValue: 1,
      duration: 600,
      delay: 1900,
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
    <ImageBackground source={bgImage} className="flex-1" resizeMode="cover">
      <View className="flex-1 justify-center items-center">
        <Animated.Text
          className="text-5xl pt-3"
          style={{
            fontFamily: "MoresugarR",
            opacity: fadeAnimText,
          }}
        >
          Brightpath
        </Animated.Text>

        <Animated.View
          style={{
            opacity: fadeAnimButton1,
            transform: [
              {
                translateX: fadeAnimButton1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-yellow-300 px-28 py-4 rounded-xl mt-4 shadow-lg"
            onPress={handleMKuliah}
          >
            <Text
              className="text-xl text-black text-center"
              style={{ fontFamily: "QuicksandB" }}
            >
              Motivasi Kuliah
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeAnimButton2,
            transform: [
              {
                translateX: fadeAnimButton2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-yellow-300 px-24 py-4 rounded-xl mt-7 shadow-lg"
            onPress={handleMKehidupan}
          >
            <Text
              className="text-xl text-black text-center"
              style={{ fontFamily: "QuicksandB" }}
            >
              Motivasi Kehidupan
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            opacity: fadeAnimButton3,
            transform: [
              {
                translateX: fadeAnimButton3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-yellow-300 px-28 py-4 rounded-xl mt-7 shadow-lg"
            onPress={handleMKBisnis}
          >
            <Text
              className="text-xl text-black text-center"
              style={{ fontFamily: "QuicksandB" }}
            >
              Motivasi Bisnis
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeAnimButton4,
            transform: [
              {
                translateX: fadeAnimButton4.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-yellow-300 px-28 py-4 rounded-xl mt-7 shadow-lg"
            onPress={handleMHealth}
          >
            <Text
              className="text-xl text-black text-center"
              style={{ fontFamily: "QuicksandB" }}
            >
              Mental Health
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View
          style={{
            opacity: fadeAnimButton5,
            transform: [
              {
                translateX: fadeAnimButton5.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-50, 0],
                }),
              },
            ],
          }}
        >
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={handleTips}
            className="mt-6"
          >
            <Text
              className="text-blue-800 underline text-lg"
              style={{ fontFamily: "QuicksandB" }}
            >
              Tips Harian?
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View className="flex justify-center items-start ml-4 mb-6">
        <TouchableOpacity
          activeOpacity={0.7}
          className="bg-orange-500 w-28 py-2 rounded-full flex-row items-center justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={18} color="white" />
          <Text
            className="text-center text-white text-md"
            style={{ fontFamily: "QuicksandB" }}
          >
            Kembali
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
