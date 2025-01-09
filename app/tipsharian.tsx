import React, { useEffect, useRef } from "react";
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
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const bgImage = require("@/assets/images/bgkonten.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;
  const fadeAnim3 = useRef(new Animated.Value(0)).current;
  const fadeAnim4 = useRef(new Animated.Value(0)).current;
  const fadeAnim5 = useRef(new Animated.Value(0)).current;
  const fadeAnim6 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim4, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim5, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.delay(600),
        Animated.timing(fadeAnim6, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  const handleMore = () => {
    router.push("/todo");
  };

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
        <Text
          className="text-5xl ml-9 pt-3 w-full"
          style={{ fontFamily: "MoresugarR" }}
        >
          Tips Harian
        </Text>
        <View>
          <Text
            className="text-justify text-xl mt-3"
            style={{ fontFamily: "QuicksandB" }}
          >
            Hasil besar dimulai dari langkah kecil. Lanjutkan langkahmu !
          </Text>
        </View>
        <View className="w-full mt-5">
          <View className="mx-4 rounded-md">
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [
                  {
                    translateX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
              className="mb-5 bg-white p-3 rounded-md shadow-sm"
            >
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "QuicksandB" }}
              >
                Gunakan teknik Pomodoro untuk meningkatkan fokus saat belajar
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim2,
                transform: [
                  {
                    translateX: fadeAnim2.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
              className="mb-5 bg-white p-3 rounded-md shadow-sm"
            >
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "QuicksandB" }}
              >
                Sediakan waktu 10 menit untuk relaksasi setiap hari
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim3,
                transform: [
                  {
                    translateX: fadeAnim3.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
              className="mb-5 bg-white p-3 rounded-md shadow-sm"
            >
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "QuicksandB" }}
              >
                Tulis to-do list setiap pagi
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim4,
                transform: [
                  {
                    translateX: fadeAnim4.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
              className="mb-5 bg-white p-3 rounded-md shadow-sm"
            >
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "QuicksandB" }}
              >
                Atur ruang belajar yang nyaman dan bebas gangguan
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim5,
                transform: [
                  {
                    translateX: fadeAnim5.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
              className="bg-white p-3 rounded-md shadow-sm"
            >
              <Text
                className="text-lg text-black"
                style={{ fontFamily: "QuicksandB" }}
              >
                Berikan penghargaan pada dirimu setelah menyelesaikan tugas
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim6,
                transform: [
                  {
                    translateX: fadeAnim6.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
            >
              <TouchableOpacity
                onPress={handleMore}
                activeOpacity={0.5}
                className="mt-4 ml-3"
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Lebih Banyak ?
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
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
