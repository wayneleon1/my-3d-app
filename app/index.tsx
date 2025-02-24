/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  ScrollView,
  View,
  Linking,
} from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ArrowIcon from "@/assets/icons/ArrowIcon.svg";
import YoutubeIcon from "@/assets/icons/YoutubeIcon.svg";
import { MotiView } from "moti";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const { width } = useWindowDimensions();

  const data = [
    {
      navigate: "3dModel",
      title: "01. Load 3D Model With React Three Fiber",
    },
    {
      navigate: "Slider",
      title: "02. Custom Slider With Skia, Reanimated and Gesture Handler",
    },
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar animated style="dark" />
          <MotiView
            from={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            style={[styles.cardContainer, { width: width * 0.95 }]}
          >
            <View>
              <Text style={styles.cardText}>Welcome to My</Text>
              <Text style={styles.cardText}>React Native 3D APP</Text>
            </View>
          </MotiView>
             <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    router.navigate("3dModel" as any);
                  }}
                >
                  <Text style={styles.textButton}>Continue</Text>
                </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F6F6F6" },
  cardContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#1C6BC8",
    aspectRatio: 16 / 9,
    marginTop: 10,
    borderRadius: 25,
  },
  cardText: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
  },
  cardButton: {
    backgroundColor: "white",
    height: 46,
    borderRadius: 12.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardButtonText: {
    color: "black",
    fontSize: 16,
    marginLeft: 10,
    fontFamily: "Inter-Medium",
  },
  listContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 14,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  textButton: {
    fontFamily: "Inter-Bold",
    color: "black",
    fontSize: 14,
  },
  listText: { color: "black", fontFamily: "Inter-Medium" },
});
