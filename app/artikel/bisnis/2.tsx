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

  const [currentContent, setCurrentContent] = useState(2);
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
              Meraih Sukses Bisnis dari Nol: Cara Memulai dengan Penuh Percaya
              Diri
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
                  Meraih sukses bisnis dari nol memang bukan perjalanan yang
                  mudah, namun dengan keyakinan dan langkah yang tepat, semua
                  tantangan bisa diatasi. Memulai bisnis tanpa pengalaman atau
                  modal besar seringkali terasa menakutkan, namun yang
                  terpenting adalah memiliki keberanian untuk memulai. Ketika
                  memulai dari bawah, kita diajak untuk lebih kreatif dan fokus
                  pada solusi, bukan masalah. Mengambil langkah pertama dengan
                  penuh percaya diri adalah kunci untuk mengubah ide bisnis
                  menjadi kenyataan. Keberanian untuk mencoba adalah awal dari
                  segalanya.
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
                  Selain itu, penting untuk selalu belajar dan beradaptasi
                  dengan kondisi pasar. Banyak pengusaha sukses yang memulai
                  dengan sumber daya terbatas, tetapi dengan semangat yang tak
                  pernah padam, mereka mampu mengembangkan bisnis mereka.
                  Memahami pasar, berinovasi, dan terus menerus meningkatkan
                  kualitas produk atau layanan adalah cara untuk mencapai
                  kesuksesan. Dalam proses tersebut, kegagalan mungkin datang,
                  namun itu bukan akhir, melainkan pelajaran berharga yang akan
                  mematangkan kita untuk mencapai tujuan yang lebih besar.
                  Dengan sikap percaya diri, semangat pantang menyerah, dan
                  tekad yang kuat, meraih sukses bisnis dari nol bukanlah hal
                  yang mustahil.
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
              Bangkit dari Kegagalan
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
                  Kegagalan adalah bagian yang tak terpisahkan dari perjalanan
                  menuju kesuksesan, terutama dalam dunia bisnis. Setiap
                  pengusaha pasti pernah merasakan kegagalan, baik itu dalam
                  bentuk kehilangan pelanggan, kerugian finansial, atau ide yang
                  gagal diterima pasar. Namun, penting untuk diingat bahwa
                  kegagalan bukanlah akhir dari segalanya. Sebaliknya, kegagalan
                  memberi pelajaran berharga yang akan membentuk mentalitas yang
                  lebih kuat dan memperkuat strategi bisnis ke depan. Dengan
                  menganalisis kesalahan yang terjadi, kita dapat
                  mengidentifikasi area yang perlu perbaikan dan mengubah
                  kegagalan menjadi peluang untuk tumbuh.
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
                  Bangkit dari kegagalan memerlukan ketekunan dan keyakinan yang
                  kuat. Banyak pengusaha besar yang pernah gagal sebelum
                  akhirnya meraih kesuksesan yang gemilang. Contohnya, Walt
                  Disney dipecat karena dianggap tidak memiliki kreativitas, dan
                  Steve Jobs diusir dari perusahaan yang ia dirikan. Namun,
                  mereka tidak menyerah. Mereka belajar dari kesalahan dan terus
                  maju dengan ide-ide baru. Begitu pula dengan Anda, jangan
                  biarkan kegagalan menghalangi langkah Anda. Gunakan pengalaman
                  tersebut untuk memperbaiki diri, mencari peluang baru, dan
                  tetap fokus pada tujuan akhir Anda. Ingat, setiap kegagalan
                  adalah batu loncatan menuju kesuksesan yang lebih besar.
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
                  className="text-justify text-lg leading-relaxed"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Mengubah kegagalan menjadi kesuksesan adalah perjalanan yang
                  tidak selalu mudah, tetapi sangat mungkin dicapai. Setiap
                  kegagalan dalam bisnis memberi kita pelajaran berharga yang
                  dapat mengarahkan kita menuju pencapaian lebih besar. Dalam
                  setiap rintangan, ada kesempatan untuk belajar, beradaptasi,
                  dan menjadi lebih kuat. Bisnis yang sukses bukanlah tentang
                  tidak pernah gagal, tetapi tentang bagaimana kita bangkit
                  setelah setiap kegagalan, dengan pemahaman yang lebih baik dan
                  semangat yang lebih kuat untuk maju.
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
                  Kesuksesan sering kali datang setelah melalui berbagai cobaan
                  dan tantangan. Tidak ada jalan pintas menuju keberhasilan, dan
                  setiap langkah yang diambil—baik itu langkah besar maupun
                  kecil—membentuk fondasi yang kokoh. Ketekunan, keberanian
                  untuk mencoba lagi, dan kemampuan untuk menyesuaikan strategi
                  adalah kunci utama untuk mengubah kegagalan menjadi
                  kemenangan. Ingat, kesuksesan tidak diukur dari seberapa cepat
                  kita mencapai tujuan, tetapi seberapa kuat kita bangkit
                  setelah jatuh.
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
