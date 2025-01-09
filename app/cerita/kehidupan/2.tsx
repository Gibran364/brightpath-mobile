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
              Pelangi Setelah Hujan: Kisah Perjuangan Hidup
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
                  Hidup tidak selalu berjalan sesuai rencana, dan sering kali
                  kita dihadapkan pada badai yang menguji kekuatan hati dan
                  mental. Namun, di balik setiap tantangan, ada peluang untuk
                  tumbuh dan menjadi lebih kuat. Sama seperti hujan yang
                  menyegarkan tanah dan menghidupkan kembali alam, kesulitan
                  dalam hidup sering kali membawa pelajaran berharga yang tidak
                  bisa kita dapatkan dengan cara lain. Ketika menghadapi cobaan,
                  penting untuk terus bergerak maju, meski langkah terasa berat.
                  Percayalah, setelah hujan deras berlalu, pelangi yang indah
                  selalu menunggu untuk menyapa.
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
                  Kisah mereka yang berhasil bangkit dari keterpurukan adalah
                  bukti nyata bahwa perjuangan tidak pernah sia-sia. Seorang ibu
                  yang kehilangan pekerjaannya, namun kemudian membangun bisnis
                  kecil dari dapurnya sendiri; seorang pemuda yang gagal di
                  sekolah, tetapi menemukan kesuksesan melalui keterampilan yang
                  ia kembangkan sendiri. Kisah-kisah ini mengingatkan kita bahwa
                  setiap hujan dalam hidup hanyalah sementara, dan jika kita
                  terus berusaha, cahaya akan kembali bersinar. Pelangi setelah
                  hujan bukan hanya keindahan yang tampak di langit, tetapi juga
                  simbol harapan yang menguatkan jiwa.
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
              Kekuatan dalam Keterbatasan: Perjalanan Seorang Wanita yang
              Menginspirasi
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
                  Dalam hidupnya yang penuh keterbatasan, seorang wanita bernama
                  Aisyah membuktikan bahwa kekuatan sejati berasal dari tekad
                  dan keberanian. Terlahir dengan hambatan fisik yang membuatnya
                  berbeda dari kebanyakan orang, Aisyah tidak pernah melihat
                  keterbatasannya sebagai penghalang. Dengan semangat pantang
                  menyerah, ia mulai menjahit sebagai cara untuk mengekspresikan
                  kreativitasnya dan membangun masa depannya. Lambat laun, hasil
                  karyanya mulai dikenal banyak orang, dan usahanya berkembang
                  menjadi bisnis yang sukses. Keterbatasannya tidak hanya
                  menjadi motivasi untuk bekerja lebih keras, tetapi juga
                  menjadi inspirasi bagi banyak orang untuk tidak menyerah pada
                  keadaan.
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
                  Aisyah percaya bahwa hidup ini tentang bagaimana kita
                  merespons tantangan, bukan sekadar menghindarinya. Dengan
                  penuh kasih, ia menggunakan kesuksesannya untuk membantu
                  orang-orang yang menghadapi tantangan serupa. Melalui cerita
                  hidupnya, ia mengajarkan bahwa setiap orang memiliki kekuatan
                  dalam diri mereka, meskipun terkadang tersembunyi di balik
                  keterbatasan. Perjalanan hidup Aisyah adalah bukti nyata bahwa
                  tidak ada batasan yang cukup kuat untuk menghentikan seseorang
                  yang memiliki keyakinan, kerja keras, dan harapan.
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
