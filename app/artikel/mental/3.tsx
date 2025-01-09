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

  const [currentContent, setCurrentContent] = useState(3);
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
              Mengelola Stres: Kunci Menuju Kesehatan Mental yang Lebih Baik
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
                  Stres adalah bagian tak terpisahkan dari kehidupan, tetapi
                  cara kita mengelolanya dapat menentukan kualitas kesehatan
                  mental kita. Dalam menghadapi tekanan sehari-hari, penting
                  untuk mengenali tanda-tanda stres agar dapat menanganinya
                  dengan efektif. Teknik seperti meditasi, latihan pernapasan,
                  atau sekadar berjalan-jalan di alam terbuka bisa menjadi
                  langkah awal yang sederhana namun bermanfaat. Selain itu,
                  menjaga keseimbangan antara pekerjaan dan kehidupan pribadi,
                  serta menciptakan waktu untuk aktivitas yang menyenangkan,
                  dapat membantu mengurangi beban pikiran dan meningkatkan
                  suasana hati secara keseluruhan.
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
                  Tidak kalah pentingnya adalah memiliki dukungan sosial yang
                  kuat. Berbagi cerita dengan teman atau keluarga dapat
                  memberikan perspektif baru dan mengurangi rasa tertekan. Jika
                  stres terasa sulit diatasi, mencari bantuan profesional
                  seperti konselor atau terapis adalah langkah bijak. Mengelola
                  stres bukan hanya soal menghilangkan tekanan, tetapi juga
                  membangun ketahanan mental agar kita dapat menghadapi
                  tantangan hidup dengan lebih percaya diri dan penuh semangat.
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
              Pentingnya Menjaga Pikiran Positif dalam Kehidupan Sehari-Hari
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
                  Pikiran positif memiliki kekuatan luar biasa untuk mengubah
                  cara kita melihat dunia dan merespons berbagai situasi. Ketika
                  kita fokus pada hal-hal baik yang ada dalam hidup, kita
                  menciptakan energi positif yang mendukung kesehatan mental dan
                  fisik. Berlatih bersyukur setiap hari, bahkan untuk hal-hal
                  kecil, seperti secangkir kopi hangat atau sinar matahari pagi,
                  dapat membantu menumbuhkan pandangan hidup yang lebih optimis.
                  Pikiran positif juga membantu mengurangi stres dan
                  meningkatkan kemampuan kita untuk mengatasi masalah dengan
                  kepala dingin.
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
                  Namun, menjaga pikiran positif bukan berarti mengabaikan
                  kenyataan atau menghindari emosi negatif. Sebaliknya, ini
                  tentang menerima kenyataan dengan lapang dada dan tetap
                  percaya bahwa setiap masalah memiliki solusi. Mengelilingi
                  diri dengan orang-orang yang mendukung dan menginspirasi dapat
                  memperkuat sikap positif kita. Dengan menjaga pikiran yang
                  optimis, kita tidak hanya meningkatkan kualitas hidup kita
                  sendiri tetapi juga menyebarkan energi positif kepada
                  orang-orang di sekitar kita.
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
              Mengubah Gagal Menjadi Kesuksesan: Pelajaran Berharga dari Bisnis
              yang Tidak Mudah
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
                  Setiap perjalanan bisnis penuh dengan lika-liku, dan kegagalan
                  adalah bagian yang tak terhindarkan. Namun, kegagalan bukanlah
                  akhir dari segalanya; justru, ini adalah awal dari pelajaran
                  yang berharga. Banyak pengusaha sukses memulai dari kegagalan,
                  tetapi mereka menggunakan pengalaman tersebut untuk bangkit
                  lebih kuat. Ketika sebuah bisnis menghadapi tantangan besar,
                  seperti penurunan penjualan atau kerugian finansial, inilah
                  saatnya untuk mengevaluasi strategi, menemukan solusi kreatif,
                  dan beradaptasi dengan perubahan. Dalam proses ini, pengusaha
                  sering kali menemukan peluang baru yang sebelumnya tak
                  terlihat.
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
                  Kegigihan dan keberanian untuk terus mencoba adalah kunci
                  utama dalam mengubah kegagalan menjadi kesuksesan. Mengakui
                  kesalahan tanpa takut untuk belajar darinya adalah langkah
                  penting menuju pertumbuhan. Contoh nyata bisa dilihat dari
                  para inovator yang tidak menyerah meski berkali-kali ditolak,
                  hingga akhirnya menciptakan produk atau layanan yang
                  revolusioner. Kegagalan hanyalah batu loncatan, dan dengan
                  mindset yang tepat, setiap rintangan dapat diubah menjadi
                  pelajaran yang membawa kita lebih dekat pada tujuan yang
                  diimpikan.
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
