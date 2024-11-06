import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import CardMusica from "../../componentes/CardMusica";
import musicas from "../../mocks/musicas";

export default function Musica() {
  return (
    <View style={styles.container}>
      <FlatList
        data={musicas}
        renderItem={({ item }) => (
          <CardMusica
            nome={item.nome}
            imagem={item.imagem}
            descricao={item.descricao}
            preco={item.preco}
            videoUrl={item.videoUrl}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
  },
  flatListContent: {
    padding: 16,
  },
});
