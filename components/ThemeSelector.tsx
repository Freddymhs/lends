import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  Text,
  StyleSheet,
} from "react-native";
import { Moon, Sun } from "lucide-react-native";
import { ColorName, ColorScheme } from "@/components/ui/theme";

interface ThemeSelectorProps {
  currentThemeName: ColorName;
  currentColorScheme: ColorScheme;
  onThemeChange: (newThemeName: ColorName) => void;
  onColorSchemeToggle: () => void;
  availableThemes: ColorName[];
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentThemeName,
  currentColorScheme,
  onThemeChange,
  onColorSchemeToggle,
  availableThemes = ["default", "ocean", "forest"],
}) => {
  const [isThemeModalVisible, setIsThemeModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Color Scheme Toggle */}
      <TouchableOpacity
        onPress={onColorSchemeToggle}
        style={styles.schemeToggle}
      >
        {currentColorScheme === "dark" ? (
          <Moon color="black" size={24} />
        ) : (
          <Sun color="black" size={24} />
        )}
      </TouchableOpacity>

      {/* Theme Selector */}
      <TouchableOpacity
        onPress={() => setIsThemeModalVisible(true)}
        style={styles.themeSelector}
      >
        <Text style={styles.themeSelectorText}>
          {currentThemeName.charAt(0).toUpperCase() + currentThemeName.slice(1)}
        </Text>
      </TouchableOpacity>

      {/* Theme Selection Modal */}
      <Modal
        transparent={true}
        visible={isThemeModalVisible}
        onRequestClose={() => setIsThemeModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Tema</Text>
            <ScrollView>
              {availableThemes.map((themeName) => (
                <TouchableOpacity
                  key={themeName}
                  style={[
                    styles.themeOption,
                    currentThemeName === themeName && styles.selectedTheme,
                  ]}
                  onPress={() => {
                    onThemeChange(themeName);
                    setIsThemeModalVisible(false);
                  }}
                >
                  <Text style={styles.themeOptionText}>
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  schemeToggle: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  themeSelector: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  themeSelectorText: {
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    maxHeight: "50%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  themeOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedTheme: {
    backgroundColor: "#f0f0f0",
  },
  themeOptionText: {
    textAlign: "center",
  },
});
