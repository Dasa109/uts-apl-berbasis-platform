import { Stack } from "expo-router";
// In your app/_layout.tsx or root layout file
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "StackSansText-ExtraLight": require("../assets/fonts/StackSansText-ExtraLight.ttf"),
    "StackSansText-Regular": require("../assets/fonts/StackSansText-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="tabs" />
      </Stack>
    );
}