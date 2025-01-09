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
  const totalContent = 3;

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
              Menemukan Kebahagiaan dalam Kesederhanaan
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-red-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
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
                  Menemukan kebahagiaan dalam kesederhanaan adalah salah satu
                  jalan hidup yang sering kali terlupakan di tengah hiruk-pikuk
                  dunia modern. Banyak dari kita terjebak dalam keinginan untuk
                  memiliki lebih banyak, yang pada akhirnya justru membawa
                  kecemasan dan ketidakpuasan. Namun, kebahagiaan sejati sering
                  kali terletak pada hal-hal sederhana yang kita nikmati setiap
                  hari. Sebuah senyuman tulus dari orang yang kita cintai,
                  secangkir kopi hangat di pagi hari, atau waktu luang yang
                  dihabiskan bersama keluarga—hal-hal ini bisa membawa
                  kebahagiaan yang jauh lebih mendalam daripada harta benda yang
                  kita kejar tanpa henti.
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
                  Kebahagiaan dalam kesederhanaan bukan berarti kita harus hidup
                  dalam kekurangan atau menghindari kemajuan, tetapi lebih pada
                  memilih untuk mensyukuri apa yang kita miliki dan menikmati
                  momen kecil dalam hidup. Ketika kita berhenti mengejar
                  kesempurnaan atau kepemilikan materi yang berlebihan, kita
                  mulai menyadari bahwa kebahagiaan sejati datang dari dalam
                  diri kita. Dengan merangkul kesederhanaan, kita bisa hidup
                  lebih damai, lebih bijaksana, dan lebih bahagia, karena
                  kebahagiaan tidak selalu ditemukan dalam kepemilikan, tetapi
                  dalam cara kita menikmati dan mensyukuri hidup yang sederhana
                  namun penuh makna.
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
              Perubahan Kecil untuk Hidup Lebih Bermakna
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-yellow-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
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
                  Terkadang, kita merasa hidup berjalan begitu monoton, seolah
                  kehilangan makna di tengah rutinitas sehari-hari. Namun, makna
                  hidup tidak selalu ditemukan dalam perubahan besar atau
                  pencapaian spektakuler. Justru, perubahan kecil yang konsisten
                  dapat membawa dampak luar biasa pada kebahagiaan dan kualitas
                  hidup kita. Mulailah dengan hal sederhana, seperti meluangkan
                  waktu untuk bersyukur setiap hari atau memberikan senyuman
                  kepada orang lain. Kebiasaan kecil ini mampu menciptakan
                  energi positif yang menjalar, mengubah cara kita memandang
                  dunia dan menjalani hidup.
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
                  Selain itu, perubahan kecil juga dapat berupa meningkatkan
                  kesadaran diri melalui refleksi dan evaluasi rutin. Luangkan
                  waktu untuk bertanya pada diri sendiri apa yang benar-benar
                  penting dan apa yang hanya membebani. Dengan memprioritaskan
                  hal-hal yang membawa kebahagiaan sejati, seperti hubungan yang
                  bermakna atau mengejar passion, kita dapat menciptakan
                  kehidupan yang lebih bermakna dan memuaskan. Ingatlah,
                  perjalanan menuju perubahan besar selalu dimulai dari langkah
                  kecil, tetapi setiap langkah membawa kita lebih dekat pada
                  hidup yang lebih baik.
                </Text>
              </Animated.View>
            </ScrollView>
          </>
        ) : currentContent === 3 ? (
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
              Menghadapi Tantangan Hidup dengan Kepala Tegak: Kekuatan dalam
              Ketabahan
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
                  className="text-justify text-lg leading-relaxed"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Hidup sering kali mempertemukan kita dengan situasi yang sulit
                  dan penuh tantangan, yang menguji batas ketahanan fisik,
                  emosional, dan mental kita. Dalam momen seperti itu, penting
                  untuk tidak menyerah pada keputusasaan. Ketabahan bukan hanya
                  tentang bertahan, tetapi juga tentang menjaga kepala tetap
                  tegak meski badai datang menghantam. Dengan keyakinan pada
                  kemampuan diri dan dukungan dari orang-orang terdekat, kita
                  dapat menemukan jalan keluar dari kegelapan. Ketabahan
                  memungkinkan kita untuk melihat peluang di balik setiap
                  kesulitan dan memberikan kekuatan untuk melangkah maju.
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
                  Orang-orang yang berhasil melewati masa-masa sulit sering kali
                  menyadari bahwa kekuatan sejati mereka terletak pada kemauan
                  untuk terus berusaha, meskipun dunia tampak tidak adil. Kisah
                  seorang ayah yang bekerja keras untuk keluarganya, seorang
                  siswa yang belajar tanpa lelah demi masa depan yang lebih
                  baik, atau seorang ibu yang berjuang demi anak-anaknya,
                  mengajarkan kita arti sebenarnya dari ketabahan. Mereka adalah
                  bukti bahwa menghadapi tantangan dengan kepala tegak tidak
                  hanya mengubah hidup mereka sendiri, tetapi juga menginspirasi
                  orang lain untuk tidak menyerah pada perjuangan hidup.
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
