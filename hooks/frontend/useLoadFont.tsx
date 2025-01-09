import { useEffect, useState } from "react";
import * as Font from "expo-font";

const useLoadFont = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          MoresugarR: require("../../assets/fonts/moresugarR.ttf"),
          QuicksandB: require("../../assets/fonts/quicksandB.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useLoadFont;
