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

export default function Todo() {
  const bgImage = require("@/assets/images/bgkonten.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const fadeAnimText = useRef(new Animated.Value(0)).current;
  const slideAnimText = useRef(new Animated.Value(-50)).current;
  const fadeAnimView = useRef(new Animated.Value(0)).current;
  const slideAnimView = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(fadeAnimText, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnimText, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnimView, {
      toValue: 1,
      duration: 600,
      delay: 700,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnimView, {
      toValue: 0,
      duration: 600,
      delay: 700,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleMore = () => {
    router.push("/");
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
        <Animated.Text
          style={{
            opacity: fadeAnimText,
            transform: [{ translateY: slideAnimText }],
            fontFamily: "MoresugarR",
          }}
          className="text-4xl text-center w-full mb-6"
        >
          Tulis to-do list setiap pagi
        </Animated.Text>

        <Animated.View
          style={{
            opacity: fadeAnimView,
            transform: [{ translateX: slideAnimView }],
          }}
          className="bg-white rounded-lg mt-4 mx-4 p-5"
        >
          <Text
            className="text-justify text-lg"
            style={{ fontFamily: "QuicksandB" }}
          >
            Cobalah untuk menulis to-do list di setiap pagi. Ini bukan hanya
            tentang mencatat tugas yang harus diselesaikan, tapi juga membantu
            kamu memulai hari dengan lebih terstruktur. Dengan menuliskan apa
            yang ingin dicapai, kamu bisa merasa lebih fokus dan siap menghadapi
            hari. Mulailah dengan hal-hal kecil, seperti tugas yang cepat
            selesai, lalu lanjutkan ke yang lebih besar. Setiap kali kamu
            mencentang satu tugas, kamu akan merasa lebih puas dan termotivasi
            untuk menyelesaikan yang berikutnya. Selain itu, to-do list juga
            bisa membantu kamu melihat dengan jelas apa yang perlu dilakukan,
            sehingga tidak ada yang terlupakan. Jadi, cobalah untuk memberi diri
            kamu waktu beberapa menit di pagi hari untuk merencanakan apa yang
            akan dilakukan. Hal kecil ini bisa sangat membantu agar hari terasa
            lebih ringan dan terorganisir.
          </Text>
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
