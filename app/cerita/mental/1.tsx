import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Animated,
} from "react-native";
import { useRouter } from "expo-router";
import memuatFont from "../../../hooks/frontend/useLoadFont";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const bgImage = require("@/assets/images/bgkonten.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const [currentContent, setCurrentContent] = useState(1);
  const totalContent = 2;

  const [fadeInDown] = useState(new Animated.Value(0));
  const [fadeInRight] = useState(new Animated.Value(0));
  const [fadeInLeft] = useState(new Animated.Value(0));

  const handleNext = () => {
    setCurrentContent((prev) => (prev < totalContent ? prev + 1 : 1));
  };

  const handleBack = () => {
    setCurrentContent((prev) => (prev > 1 ? prev - 1 : totalContent));
  };

  useEffect(() => {
    fadeInDown.setValue(0);
    fadeInRight.setValue(0);
    fadeInLeft.setValue(0);

    Animated.timing(fadeInDown, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeInRight, {
      toValue: 1,
      duration: 600,
      delay: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeInLeft, {
      toValue: 1,
      duration: 600,
      delay: 600,
      useNativeDriver: true,
    }).start();
  }, [currentContent]);

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
        {currentContent === 1 ? (
          <>
            <Animated.Text
              className="text-3xl text-center w-full underline leading-snug mt-10"
              style={{
                fontFamily: "MoresugarR",
                opacity: fadeInDown,
                transform: [
                  {
                    translateY: fadeInDown.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
            >
              Membangun Kesehatan Mental yang Kuat di Tengah Tantangan Hidup
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-blue-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
                style={{
                  opacity: fadeInRight,
                  transform: [
                    {
                      translateX: fadeInRight.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                }}
              >
                <Text
                  className="text-justify text-lg leading-relaxed"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Kesehatan mental yang kuat tidak selalu hadir sejak awal,
                  tetapi dibangun melalui berbagai tantangan yang dihadapi dalam
                  kehidupan. Banyak orang menemukan kekuatan mereka justru
                  setelah melewati masa-masa sulit. Contohnya, seorang mahasiswa
                  bernama Dina yang harus menghadapi tekanan akademis,
                  ekspektasi keluarga, dan rasa kesepian saat jauh dari rumah.
                  Dina merasa dirinya tenggelam dalam kekhawatiran dan
                  ketidakpastian. Namun, dengan bantuan teman dekat dan seorang
                  konselor, ia mulai mempraktikkan mindfulness dan mengenali
                  pentingnya mengambil jeda untuk merawat dirinya sendiri.
                  Langkah kecil, seperti menulis jurnal harian atau melakukan
                  olahraga ringan, membantu Dina menemukan stabilitas emosional.
                </Text>
              </Animated.View>

              <Animated.View
                className="bg-white border shadow-lg rounded-lg mx-4 mb-4 p-5"
                style={{
                  opacity: fadeInLeft,
                  transform: [
                    {
                      translateX: fadeInLeft.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-50, 0],
                      }),
                    },
                  ],
                }}
              >
                <Text
                  className="text-justify text-lg leading-relaxed"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Kesehatan mental tidak hanya tentang mengatasi masalah, tetapi
                  juga membangun ketahanan untuk menghadapi masa depan. Ketika
                  Dina mulai memprioritaskan dirinya sendiri, ia menemukan bahwa
                  tantangan tidak lagi terasa seperti beban berat, melainkan
                  peluang untuk bertumbuh. Pengalaman ini mengajarkannya bahwa
                  menjaga keseimbangan antara kebutuhan fisik dan emosional
                  adalah kunci untuk menghadapi hidup dengan lebih percaya diri.
                  Kini, Dina menjadi advokat kesehatan mental di kampusnya,
                  berbagi pengalaman dan menginspirasi orang lain untuk merawat
                  diri mereka dengan lebih baik.
                </Text>
              </Animated.View>
            </ScrollView>
          </>
        ) : currentContent === 2 ? (
          <>
            <Animated.Text
              className="text-3xl text-center w-full underline leading-snug mt-10"
              style={{
                fontFamily: "MoresugarR",
                opacity: fadeInDown,
                transform: [
                  {
                    translateY: fadeInDown.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-50, 0],
                    }),
                  },
                ],
              }}
            >
              Bangkit dari Kegelapan: Perjalanan Seseorang Menghadapi Depresi
              dan Menemukan Cahaya
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-purple-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
                style={{
                  opacity: fadeInRight,
                  transform: [
                    {
                      translateX: fadeInRight.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                }}
              >
                <Text
                  className="text-justify text-lg"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Dalam sebuah kota kecil, seorang pemuda bernama Arman pernah
                  merasa hidupnya tidak lagi berarti. Depresi yang ia alami
                  membuatnya merasa seperti terperangkap dalam kegelapan tanpa
                  akhir. Setiap hari terasa seperti perjuangan untuk sekadar
                  bangun dari tempat tidur. Namun, titik balik datang ketika
                  seorang teman mengulurkan tangan dan membawanya ke sebuah
                  komunitas dukungan kesehatan mental. Di sana, Arman mulai
                  berbagi ceritanya dan menemukan bahwa ia tidak sendirian.
                </Text>
              </Animated.View>

              <Animated.View
                className="bg-white border shadow-lg rounded-lg mx-4 mb-4 p-5"
                style={{
                  opacity: fadeInLeft,
                  transform: [
                    {
                      translateX: fadeInLeft.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-50, 0],
                      }),
                    },
                  ],
                }}
              >
                <Text
                  className="text-justify text-lg"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Melalui perjalanan yang penuh perjuangan, Arman perlahan-lahan
                  membangun kembali hidupnya. Ia belajar untuk menerima dirinya
                  apa adanya, tanpa tekanan untuk terlihat sempurna. Menemukan
                  hobi baru, seperti melukis dan bermain gitar, membantunya
                  mengekspresikan emosi yang sulit ia ungkapkan dengan
                  kata-kata. Kini, Arman tidak hanya menemukan cahaya di ujung
                  kegelapan, tetapi ia juga menjadi cahaya bagi orang lain yang
                  sedang berjuang. Dengan pengalaman dan keberaniannya, ia
                  menjadi inspirasi bahwa tidak ada kegelapan yang tidak dapat
                  ditembus oleh harapan dan cinta.
                </Text>
              </Animated.View>
            </ScrollView>
          </>
        ) : null}

        <View className="flex-row justify-center items-start gap-5 mb-6">
          {currentContent > 1 && (
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-white p-2 rounded-full"
              onPress={handleBack}
            >
              <Ionicons name="chevron-back" size={18} color="black" />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-orange-500 w-28 py-2 rounded-full flex items-center justify-center"
            onPress={() => router.back()}
          >
            <Text
              className="text-center text-white text-md"
              style={{ fontFamily: "QuicksandB" }}
            >
              Kembali
            </Text>
          </TouchableOpacity>

          {currentContent < totalContent && (
            <TouchableOpacity
              activeOpacity={0.7}
              className="bg-white p-2 rounded-full"
              onPress={handleNext}
            >
              <Ionicons name="chevron-forward" size={18} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
