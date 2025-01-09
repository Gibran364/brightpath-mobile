import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import memuatFont from "../hooks/frontend/useLoadFont";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
  const bgImage = require("@/assets/images/bgkonten.png");
  const fontsLoaded = memuatFont();
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/beranda");
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
          className="text-[35px] ml-8 pt-3 w-full"
          style={{ fontFamily: "MoresugarR" }}
        >
          Motivasi Kehidupan
        </Text>
        <View className="mx-4">
          <Text
            className="text-justify text-xl"
            style={{ fontFamily: "QuicksandB" }}
          >
            Jangan takut gagal, karena setiap langkah yang kamu ambil, baik itu
            kecil atau besar, adalah bagian dari perjalanan menuju sukses. Hidup
            ini tentang terus mencoba, belajar, dan menjadi lebih baik dari hari
            kemarin.
          </Text>
        </View>
        <View className="w-full mt-5">
          <View className="bg-white mx-8 rounded-md p-5">
            <Text
              className="text-start text-xl mb-4"
              style={{ fontFamily: "QuicksandB" }}
            >
              Ingin Membaca Artikel ?
            </Text>
            <View className="flex-row mb-3">
              <Ionicons
                name="ellipse"
                size={8}
                color="black"
                className="text-center mt-3 mr-3"
              />
              <TouchableOpacity
                onPress={() => router.push("/artikel/kehidupan/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Menemukan Kebahagiaan dalam Kesederhanaan
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row mb-3">
              <Ionicons
                name="ellipse"
                size={8}
                color="black"
                className="text-center mt-3 mr-3"
              />
              <TouchableOpacity
                onPress={() => router.push("/artikel/kehidupan/2")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Perubahan Kecil untuk Hidup Lebih Bermakna
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row">
              <Ionicons
                name="ellipse"
                size={8}
                color="black"
                className="text-center mt-3 mr-3"
              />
              <TouchableOpacity
                onPress={() => router.push("/artikel/kehidupan/3")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Menghadapi Tantangan Hidup dengan Kepala Tegak: Kekuatan dalam
                  Ketabahan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full mt-4">
          <View className="bg-white mx-8 rounded-md p-5">
            <Text
              className="text-start text-xl mb-4"
              style={{ fontFamily: "QuicksandB" }}
            >
              Ingin Membaca Cerita Inspiratif ?
            </Text>
            <View className="flex-row mb-3">
              <Ionicons
                name="ellipse"
                size={8}
                color="black"
                className="text-center mt-3 mr-3"
              />
              <TouchableOpacity
                onPress={() => router.push("/cerita/kehidupan/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Pelangi Setelah Hujan: Kisah Perjuangan Hidup
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row mb-3">
              <Ionicons
                name="ellipse"
                size={8}
                color="black"
                className="text-center mt-3 mr-3"
              />
              <TouchableOpacity
                onPress={() => router.push("/cerita/kehidupan/2")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Kekuatan dalam Keterbatasan: Perjalanan Seorang Wanita yang
                  Menginspirasi
                </Text>
              </TouchableOpacity>
            </View>
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
