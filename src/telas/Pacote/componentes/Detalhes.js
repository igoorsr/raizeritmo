import React from "react";
import { StyleSheet, Image, View, Alert } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Produto({ nome, detalhes, preco, botao }) {
  return (
    <View style={styles.produto}>
      <View style={styles.logotipo}>
        <Texto style={styles.nome}>{nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{detalhes}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
      <Botao
        textoBotao={botao}
        acaoBotao={() => {
          Alert.alert("AGUARDE!", "Novos albuns em breve.");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  produto: {
    paddingVertical: 0,
    paddingHorizontal: 16,
    backgroundColor: "#262626",
  },
  nome: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 0,
  },
  descricao: {
    color: "white",
    fontSize: 18,
  },
  preco: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 8,
  },
  logotipo: {
    flexDirection: "row",
  },
});
