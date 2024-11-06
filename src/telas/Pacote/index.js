import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

export default function Produto({ topo, detalhes, itens }) {
  return (
    <FlatList
      style={styles.container}
      data={itens.lista}
      renderItem={Item}
      keyExtractor={itens.lista.nome}
      ListHeaderComponent={() => {
        return (
          <>
            <Topo {...topo} />
            <View>
              <Detalhes {...detalhes} />
              <Texto style={styles.titulo}>{itens.titulo}</Texto>
            </View>
          </>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 26,
    color: "white",
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: -20,
  },

  container: {
    backgroundColor: "#262626",
  },
});
