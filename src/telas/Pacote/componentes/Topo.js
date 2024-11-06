import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";

import Header from "../../../../assets/Imagens/album1.webp";
import Texto from "../../../componentes/Texto.js";

const width = Dimensions.get("screen").width;

export default function Topo({ titulo }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Image source={Header} style={styles.topo} />
      <Texto style={styles.titulo}>{titulo}</Texto>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#262626",
  },

  topo: {
    width: 400,
    height: 400,
    flex: 1,
    marginBottom: -120,
    marginTop: -80,
    alignSelf: "center",
    resizeMode: "contain",
  },

  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "right",
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    paddingTop: 70,
  },
});
