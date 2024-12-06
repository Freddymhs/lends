import { Theme } from "@react-navigation/native";

export type ColorScheme = "light" | "dark";
export type ColorName = "ocean" | "forest" | "default";

export type CustomThemeColors = Theme["colors"] & {
  // Add any additional custom colors here
};

export type CustomTheme = Theme & {
  colorName: ColorName;
};

export type Themes = {
  [key in ColorScheme]: {
    [name in ColorName]: CustomTheme;
  };
};

const createTheme = (
  colorScheme: ColorScheme,
  colorName: ColorName,
  colors: CustomThemeColors
): CustomTheme => ({
  dark: colorScheme === "dark",
  colors: colors,
  colorName: colorName,
  fonts: {
    regular: {
      fontFamily: "System",
      fontWeight: "400" as const,
    },
    medium: {
      fontFamily: "System",
      fontWeight: "500" as const,
    },
    bold: {
      fontFamily: "System",
      fontWeight: "700" as const,
    },
    heavy: {
      fontFamily: "System",
      fontWeight: "900" as const,
    },
  },
});

export const themes: Themes = {
  light: {
    default: createTheme("light", "default", {
      primary: "rgb(0, 122, 255)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(216, 216, 216)",
      notification: "rgb(255, 59, 48)",
    }),
    ocean: createTheme("light", "ocean", {
      primary: "rgb(0, 80, 255)",
      background: "rgb(230, 255, 255)",
      card: "rgb(255, 255, 255)",
      text: "rgb(0, 0, 80)",
      border: "rgb(200, 230, 255)",
      notification: "rgb(0, 100, 255)",
    }),
    forest: createTheme("light", "forest", {
      primary: "rgb(0, 155, 0)",
      background: "rgb(240, 255, 240)",
      card: "rgb(255, 255, 255)",
      text: "rgb(0, 80, 0)",
      border: "rgb(200, 255, 200)",
      notification: "rgb(255, 100, 0)",
    }),
  },
  dark: {
    default: createTheme("dark", "default", {
      primary: "rgb(10, 132, 255)",
      background: "rgb(1, 1, 1)",
      card: "rgb(18, 18, 18)",
      text: "rgb(229, 229, 231)",
      border: "rgb(39, 39, 41)",
      notification: "rgb(255, 69, 58)",
    }),
    ocean: createTheme("dark", "ocean", {
      primary: "rgb(50, 130, 255)",
      background: "rgb(0, 20, 40)",
      card: "rgb(10, 30, 50)",
      text: "rgb(200, 230, 255)",
      border: "rgb(30, 60, 100)",
      notification: "rgb(0, 180, 255)",
    }),
    forest: createTheme("dark", "forest", {
      primary: "rgb(0, 200, 0)",
      background: "rgb(10, 30, 10)",
      card: "rgb(20, 40, 20)",
      text: "rgb(200, 255, 200)",
      border: "rgb(40, 80, 40)",
      notification: "rgb(255, 150, 0)",
    }),
  },
};
