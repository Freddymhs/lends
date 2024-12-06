import "../global.css";
import { ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useColorScheme as useDeviceColorScheme } from "react-native";
import "react-native-reanimated";
import {
  themes,
  ColorScheme,
  ColorName,
  CustomTheme,
} from "@/components/ui/theme";
import { ThemeSelector } from "@/components/ThemeSelector"; // Asegúrate de ajustar la ruta de importación
import PageHeader from "@/components/ui/header";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const deviceColorScheme = useDeviceColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (deviceColorScheme as ColorScheme) || "light"
  );
  const [themeName, setThemeName] = useState<ColorName>("default");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    setColorScheme((deviceColorScheme as ColorScheme) || "light");
  }, [deviceColorScheme]);

  if (!loaded) {
    return null;
  }

  const currentTheme: CustomTheme = themes[colorScheme][themeName];

  return (
    <ThemeProvider value={currentTheme}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <PageHeader />
      <Stack
        screenOptions={{
          headerRight: () => (
            <ThemeSelector
              currentThemeName={themeName}
              currentColorScheme={colorScheme}
              onThemeChange={setThemeName}
              onColorSchemeToggle={() =>
                setColorScheme(colorScheme === "light" ? "dark" : "light")
              }
              availableThemes={["default", "ocean", "forest"]}
            />
          ),
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: `Tema Actual: ${themeName} (${colorScheme})`,
          }}
        />
        <Stack.Screen name="otra cosa" />
      </Stack>
    </ThemeProvider>
  );
}
