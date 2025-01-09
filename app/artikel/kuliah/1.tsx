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
              Cara Tetap Termotivasi di Tengah Tugas yang Menumpuk
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
                  Ketika tugas menumpuk dan rasa kewalahan mulai menguasai,
                  penting untuk tetap tenang dan mengambil langkah strategis.
                  Pecah tugas besar menjadi langkah-langkah kecil yang lebih
                  terukur, sehingga Anda dapat fokus pada satu hal dalam satu
                  waktu tanpa merasa terbebani. Menetapkan tujuan harian yang
                  realistis, seperti menyelesaikan dua hingga tiga tugas utama,
                  dapat membantu Anda tetap berada di jalur yang benar. Selain
                  itu, beri diri Anda penghargaan kecil setelah setiap
                  pencapaian, seperti secangkir kopi favorit atau waktu singkat
                  untuk bersantai. Jangan lupa menjaga kesehatan fisik dan
                  mental—pastikan Anda cukup tidur, makan makanan bergizi, dan
                  berolahraga ringan agar tubuh tetap bugar dan pikiran jernih.
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
                  Atur lingkungan belajar Anda agar kondusif dengan
                  menghilangkan gangguan, seperti notifikasi ponsel, dan
                  tambahkan elemen yang menenangkan, seperti musik lembut atau
                  aromaterapi. Jika merasa terjebak, jangan ragu untuk mencari
                  dukungan dari teman, keluarga, atau mentor. Bergabung dengan
                  kelompok belajar juga dapat membantu menciptakan suasana yang
                  saling mendukung. Yang terpenting, selalu ingatkan diri Anda
                  tentang tujuan akhir dan mimpi besar yang sedang Anda
                  perjuangkan. Memvisualisasikan hasil positif dari upaya Anda
                  dapat menjadi motivasi kuat untuk terus maju, meskipun
                  tantangan terasa berat. Akhirnya, ingatlah bahwa perjalanan
                  ini adalah bagian dari proses menuju kesuksesan—nikmati setiap
                  langkahnya.
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
              Menjaga Semangat Kuliah di Tengah Kesibukan dan Tekanan
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
                  Menjaga semangat kuliah di tengah kesibukan dan tekanan memang
                  menjadi tantangan yang besar, terutama ketika menghadapi tugas
                  yang menumpuk, ujian yang semakin dekat, serta berbagai
                  kegiatan organisasi atau sosial. Pada saat seperti ini,
                  seringkali motivasi mulai menurun dan rasa lelah mulai
                  menghampiri. Namun, untuk tetap semangat, penting untuk
                  memiliki tujuan yang jelas dan alasan yang kuat mengapa kita
                  memilih untuk melanjutkan pendidikan. Menetapkan tujuan jangka
                  panjang, seperti impian karir atau pencapaian pribadi, dapat
                  membantu Anda melihat gambaran besar dan memberikan dorongan
                  untuk bertahan meski menghadapi berbagai tantangan. Fokus pada
                  pencapaian tersebut, dan ingatkan diri Anda bahwa setiap usaha
                  yang dilakukan, meskipun kecil, membawa Anda lebih dekat
                  menuju tujuan tersebut.
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
                  Selain itu, penting untuk menciptakan rutinitas yang mendukung
                  kesehatan fisik dan mental. Cobalah untuk menjaga pola tidur
                  yang baik, makan dengan bergizi, dan meluangkan waktu untuk
                  berolahraga, meskipun hanya sejenak. Jangan ragu untuk
                  mengambil istirahat ketika dibutuhkan, karena tubuh dan
                  pikiran yang segar akan lebih produktif. Dengan keseimbangan
                  yang baik antara studi, istirahat, dan kegiatan sosial, Anda
                  dapat menjaga semangat kuliah dan tetap termotivasi meskipun
                  di tengah kesibukan dan tekanan yang datang.
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
              Mengatur Prioritas: Kunci Sukses Kuliah
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
                  Mengatur prioritas adalah keterampilan penting yang harus
                  dimiliki oleh mahasiswa untuk menghadapi berbagai tuntutan
                  akademik dan kehidupan pribadi. Dalam keseharian yang penuh
                  dengan tugas, ujian, dan kegiatan organisasi, kemampuan untuk
                  menentukan apa yang penting dan mendesak sangat membantu
                  mengelola waktu secara efektif. Salah satu cara yang bisa
                  diterapkan adalah menggunakan Matriks Eisenhower untuk
                  memisahkan tugas berdasarkan tingkat urgensi dan
                  kepentingannya. Dengan fokus pada tugas penting dan mendesak
                  terlebih dahulu, Anda dapat mengurangi tekanan serta
                  menyelesaikan pekerjaan secara lebih efisien.
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
                  Selain itu, penting untuk membuat jadwal harian yang realistis
                  dan memanfaatkan teknologi pendukung seperti Google Calendar
                  atau Notion untuk mengorganisir kegiatan. Metode time
                  blocking, yaitu mengalokasikan waktu khusus untuk setiap
                  aktivitas, juga dapat membantu menghindari multitasking yang
                  sering kali menurunkan produktivitas. Jangan lupa untuk
                  memberikan ruang bagi istirahat dan kegiatan santai agar tetap
                  seimbang. Mengelola prioritas dengan baik bukan hanya membantu
                  meraih kesuksesan akademik, tetapi juga menjaga kesejahteraan
                  mental selama menjalani kehidupan kuliah.
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
