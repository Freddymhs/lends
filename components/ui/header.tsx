import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";

const PageHeader = () => {
  const { colors: { card, text } = {} } = useTheme();

  return (
    <View
      style={[
        {
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: card,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: text,
        }}
      >
        PRESTAMOS
      </Text>
    </View>
  );
};

export default PageHeader;
