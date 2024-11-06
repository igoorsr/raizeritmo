import React, { useState, useEffect } from "react";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { View, TouchableOpacity, StyleSheet, Keyboard } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Audio } from "expo-av";

import Perfil from "./src/telas/Perfil/Perfil.js";
import Musica from "./src/telas/Musica";
import Sobre from "./src/telas/Sobre";
import Produto from "./src/telas/Pacote";
import mock from "./src/mocks/produto";
import mock_sobre from "./src/mocks/sobre";
import mock_musicas from "./src/mocks/musicas";
import Texto from "./src/componentes/Texto";

import ListaDesejos from "./src/telas/ListaDesejos";

function MenuListaDesejos() {
  return <ListaDesejos />;
}

function MenuKit() {
  return <Produto {...mock} />;
}

function MenuMusica() {
  return <Musica {...mock_musicas} />;
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />;
}

function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log("status", audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(
          require("./assets/Musicas/negroDrama.mp3")
        );
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return (
    <TouchableOpacity
      onPress={() => {
        if (!loading) {
          setAudioStatus(!audioStatus);
        }
      }}
      style={styles.audioButton}
    >
      <Texto style={styles.botao2}>PLAY</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao2: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  audioButton: {
    position: "absolute",
    bottom: "9%",
    right: 9,
    zIndex: 1,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
});

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "PACOTE") {
            iconName = focused ? "folder-open" : "folder-open-outline";
          } else if (route.name === "INÍCIO") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MUSICAS") {
            iconName = focused ? "radio" : "radio-outline";
          } else if (route.name === "FAVORITOS") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "PERFIL") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="INÍCIO" component={MenuSobre} />
      <Tab.Screen name="PACOTE" component={MenuKit} />
      <Tab.Screen name="MUSICAS" component={MenuMusica} />
      <Tab.Screen name="FAVORITOS" component={MenuListaDesejos} />
      <Tab.Screen name="PERFIL" component={Perfil} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratLight: Montserrat_300Light,
    MontserratRegular: Montserrat_400Regular,
  });

  const [keyboardVisible] = useState(false);

  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
      {!keyboardVisible && <MenuAudio />}
    </NavigationContainer>
  );
}
