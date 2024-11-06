import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componentes/Texto";

export default function Item({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={styles.item}>
      <Image source={imagem} style={styles.imagem} resizeMode="contain" />
      <Texto style={styles.nome}>{nome}</Texto>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
    backgroundColor: "#262626",
  },
  nome: {
    fontSize: 16,
    lineHeight: 20,
    marginLeft: 11,
    color: "white",
  },
  imagem: {
    width: 150,
    height: 150,
  },
});
