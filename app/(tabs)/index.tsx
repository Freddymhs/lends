import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <SafeAreaView
      className="p-4 flex-row justify-between items-center "
      style={{ backgroundColor: theme.colors.card }}
    >
      <ScrollView>
        <View>
          {/* Título de bienvenida */}
          <View>
            <Text>Bienvenido</Text>
            <Text>Explora tus opciones</Text>
          </View>

          {/* Sección de información principal */}
          <View>
            <Text>Información Principal</Text>
            <Text>
              Este es un espacio para mostrar información clave o realizar
              acciones principales.
            </Text>

            {/* Contenedor de botones */}
            <View>
              <TouchableOpacity
                onPress={() => {
                  /* Acción del primer botón */
                }}
              >
                <Text>Acción 1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* Acción del segundo botón */
                }}
              >
                <Text>Acción 2</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Puedes agregar más secciones aquí */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
