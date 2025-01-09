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
              Cerita inspiratif mahasiswa sukses
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
                  Di sebuah universitas ternama, ada seorang mahasiswa bernama
                  Dika yang berasal dari keluarga sederhana. Meskipun hidup
                  dengan keterbatasan, Dika memiliki impian besar untuk menjadi
                  seorang pengusaha sukses. Saat pertama kali masuk kuliah, Dika
                  menghadapi banyak tantangan—dari kesulitan biaya hingga
                  tuntutan akademik yang berat. Namun, Dika tidak menyerah. Ia
                  memanfaatkan setiap kesempatan untuk belajar, baik dari dosen,
                  teman, maupun berbagai sumber lain. Di tengah kesibukannya, ia
                  juga mulai mengembangkan ide bisnis kecil-kecilan yang dimulai
                  dengan menjual produk-produk lokal melalui media sosial. Meski
                  awalnya sulit, Dika terus berusaha dan mengatur waktu antara
                  kuliah dan bisnis dengan sangat bijak.
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
                  Seiring berjalannya waktu, bisnis Dika mulai berkembang. Ia
                  mendapatkan banyak pelanggan dan bahkan beberapa investor
                  tertarik untuk bekerja sama. Namun, keberhasilannya tidak
                  datang begitu saja. Dika sering bekerja lembur hingga larut
                  malam, membaca buku, dan belajar dari kegagalan yang ia alami.
                  Tidak hanya itu, ia juga aktif dalam organisasi kampus,
                  menjalin relasi dengan berbagai pihak yang akhirnya membantu
                  dalam pengembangan bisnisnya. Ketekunan, kerja keras, dan
                  tekad untuk tidak menyerah membawanya pada kesuksesan. Kini,
                  Dika sudah memiliki usaha yang berkembang pesat dan menjadi
                  inspirasi bagi banyak mahasiswa lainnya. Ia membuktikan bahwa
                  dengan semangat yang kuat dan konsistensi, segala rintangan
                  dapat diatasi, dan impian bisa terwujud.
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
              Dari Mahasiswa Biasa Menjadi Luar Biasa
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-orange-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
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
                  Siti, seorang mahasiswa yang awalnya dianggap biasa oleh
                  banyak orang, membuktikan bahwa setiap orang memiliki potensi
                  besar untuk berkembang. Dia berasal dari kota kecil dengan
                  latar belakang keluarga sederhana. Ketika pertama kali
                  memasuki dunia perkuliahan, Siti merasa cemas dan tidak
                  percaya diri. Namun, dia segera menyadari bahwa untuk bisa
                  sukses, dia harus keluar dari zona nyaman. Dengan tekad yang
                  kuat, Siti mulai lebih aktif mengikuti berbagai kegiatan
                  kampus, baik akademik maupun non-akademik. Selain belajar
                  dengan giat, ia juga berusaha membangun jaringan dengan dosen
                  dan teman-teman yang memiliki visi yang sama.
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
                  Perubahan besar terjadi pada Siti ketika dia mulai
                  mengembangkan minat di bidang teknologi dan mulai ikut serta
                  dalam kompetisi-kompetisi inovasi yang diadakan oleh kampus.
                  Meski tidak langsung menang, setiap pengalaman memberikan
                  pembelajaran berharga yang semakin membentuk karakternya.
                  Perlahan, Siti dikenal sebagai mahasiswa yang tidak hanya
                  cerdas, tetapi juga kreatif dan memiliki kepemimpinan yang
                  kuat. Berkat kegigihan dan keberaniannya untuk mengambil
                  peluang, Siti kini menjadi seorang pemimpin di organisasi
                  kemahasiswaan dan sukses menciptakan startup teknologi yang
                  mendapatkan perhatian banyak pihak. Siti membuktikan bahwa
                  siapa pun bisa menjadi luar biasa asalkan berani berusaha
                  lebih keras, percaya pada diri sendiri, dan tidak takut untuk
                  mencoba hal-hal baru.
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
