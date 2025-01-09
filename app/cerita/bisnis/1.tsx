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
              Dari Garasi ke Puncak: Perjalanan Seorang Pengusaha Muda
            </Animated.Text>
            <ScrollView className="my-6">
              <Animated.View
                className="bg-green-100 border shadow-lg rounded-lg mx-4 mb-4 p-5"
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
                  Perjalanan seorang pengusaha muda sering kali dimulai dari
                  tempat yang sederhana, bahkan terkadang dari sebuah garasi.
                  Banyak kisah sukses besar dimulai dengan visi yang jelas dan
                  tekad yang kuat, meskipun dengan sumber daya yang terbatas.
                  Seperti halnya perusahaan teknologi besar yang bermula dari
                  garasi rumah, seorang pengusaha muda yang memiliki semangat
                  dan keinginan untuk belajar dapat meraih impian mereka
                  meskipun menghadapi banyak hambatan. Mereka tidak takut untuk
                  memulai dari nol, karena mereka tahu bahwa setiap langkah
                  kecil yang mereka ambil adalah bagian dari proses menuju
                  tujuan besar.
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
                  Kesulitan dan tantangan yang dihadapi dalam perjalanan ini
                  bukanlah penghalang, melainkan batu loncatan menuju
                  kesuksesan. Dalam proses tersebut, penting untuk tetap fokus
                  pada visi jangka panjang dan tidak menyerah pada kegagalan
                  sementara. Setiap kegagalan justru memberi wawasan dan
                  pemahaman yang lebih mendalam tentang pasar dan diri sendiri.
                  Dari garasi kecil hingga puncak kesuksesan, perjalanan seorang
                  pengusaha muda adalah bukti nyata bahwa kerja keras,
                  kreativitas, dan ketekunan akan selalu membuahkan hasil yang
                  luar biasa.
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
              Langkah Kecil Menuju Impian Besar: Kisah Seorang Mahasiswa yang
              Tak Pernah Menyerah
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
                  className="text-justify text-lg"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Kisah seorang mahasiswa yang memulai langkah kecil menuju
                  impian besarnya adalah contoh nyata bahwa tidak ada mimpi yang
                  terlalu besar untuk dicapai, asalkan ada usaha dan ketekunan.
                  Dengan modal ilmu yang didapat di bangku kuliah dan semangat
                  yang tinggi, ia mulai merintis bisnis kecil-kecilan di
                  sela-sela waktu kuliahnya. Meskipun menghadapi berbagai
                  tantangan, seperti waktu yang terbatas dan dana yang terbatas,
                  ia tetap gigih berusaha dan tidak pernah menyerah. Keberanian
                  untuk memulai, meskipun dalam keterbatasan, menjadi landasan
                  kuat yang menggerakkannya maju menuju kesuksesan.
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
                  Setiap kegagalan yang dialami selama perjalanan bisnisnya
                  dianggap sebagai pelajaran berharga. Alih-alih merasa putus
                  asa, ia menggunakan kegagalan tersebut untuk memperbaiki
                  strategi dan menemukan solusi baru. Perlahan namun pasti,
                  bisnis kecilnya tumbuh dan berkembang seiring berjalannya
                  waktu. Kisahnya mengajarkan bahwa langkah kecil yang diambil
                  dengan tekad dan ketekunan akan membawa seseorang lebih dekat
                  menuju impian besarnya, dan bahwa kesuksesan bukan hanya
                  tentang berapa banyak yang dicapai, tetapi juga tentang
                  seberapa besar tekad untuk terus berusaha, meskipun dihadapkan
                  pada rintangan.
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
