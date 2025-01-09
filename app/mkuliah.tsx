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
          className="text-5xl pt-3 text-start w-full ml-5"
          style={{ fontFamily: "MoresugarR" }}
        >
          Motivasi Kuliah
        </Text>
        <View className="mx-5 mt-2">
          <Text
            className="text-justify text-xl"
            style={{ fontFamily: "QuicksandB" }}
          >
            Semangat kuliah adalah bahan bakar utama yang mendorong Anda untuk
            meraih sukses akademik. Di tengah tumpukan tugas, ujian yang
            menantang, dan tekanan lainnya, menjaga semangat belajar adalah
            kunci untuk terus maju
          </Text>
        </View>
        <View className="w-full mt-5">
          <View className="bg-white mx-8 rounded-md py-6 px-4">
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
                onPress={() => router.push("/artikel/kuliah/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Cara Tetap Termotivasi di Tengah Tugas yang Menumpuk
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
                onPress={() => router.push("/artikel/kuliah/2")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Semangat Kuliah di Tengah Kesibukan dan Tekanan
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
                onPress={() => router.push("/artikel/kuliah/3")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Prioritas: Kunci Sukses Kuliah
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full mt-6">
          <View className="bg-white mx-8 rounded-md py-6 px-4">
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
                onPress={() => router.push("/cerita/kuliah/1")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Cerita inspiratif mahasiswa sukses
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
                onPress={() => router.push("/cerita/kuliah/2")}
                activeOpacity={0.6}
              >
                <Text
                  className="text-lg text-blue-500 underline"
                  style={{ fontFamily: "QuicksandB" }}
                >
                  Dari Mahasiswa Biasa Menjadi Luar Biasa
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
