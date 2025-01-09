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
          className="text-5xl pt-3 text-start w-full ml-8"
          style={{ fontFamily: "MoresugarR" }}
        >
          Motivasi Bisnis
        </Text>
        <View className="mx-4 mt-2">
          <Text
            className="text-justify text-xl"
            style={{ fontFamily: "QuicksandB" }}
          >
            Kesuksesan dalam bisnis tidak datang dari keberuntungan semata,
            tetapi dari keberanian untuk bermimpi besar, kerja keras tanpa
            henti, dan tekad untuk bangkit setiap kali menghadapi kegagalan
          </Text>
        </View>
        <View className="w-full mt-5">
          <View className="bg-white mx-8 rounded-md p-5">
            <Text
              className="text-start text-xl mb-3"
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
                onPress={() => router.push("/artikel/bisnis/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Meraih Sukses Bisnis dari Nol: Cara Memulai dengan Penuh
                  Percaya Diri
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
                onPress={() => router.push("/artikel/bisnis/2")}
                activeOpacity={0.6}
                className="mb-3"
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Bangkit dari Kegagalan
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
                onPress={() => router.push("/artikel/bisnis/3")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Mengubah Gagal Menjadi Kesuksesan: Pelajaran Berharga dari
                  Bisnis yang Tidak Mudah
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full mt-6">
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
                onPress={() => router.push("/cerita/bisnis/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Dari Garasi ke Puncak: Perjalanan Seorang Pengusaha Muda
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
                onPress={() => router.push("/cerita/bisnis/2")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Langkah Kecil Menuju Impian Besar: Kisah Seorang Mahasiswa
                  yang Tak Pernah Menyerah
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
