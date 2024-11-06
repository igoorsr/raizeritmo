import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

export default function Botao({ textoBotao, acaoBotao }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={acaoBotao}>
      <Texto style={styles.botaoTexto}>{textoBotao}</Texto>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 10,
    marginBottom: -15,
    borderRadius: 5,
  },
  botaoTexto: {
    color: "#262626",
    fontSize: 18,
    fontWeight: "bold",
  },
});
