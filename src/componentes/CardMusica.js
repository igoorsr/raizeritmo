import React, { useState, useEffect, useCallback } from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet, Modal, View, TouchableOpacity } from "react-native";
import { Video } from "expo-av";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardMusica({
  id,
  nome,
  descricao,
  imagem,
  preco,
  videoUrl,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Abre o modal do vídeo
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Função para verificar se o item já está na lista de desejos
  const checkIfInWishlist = useCallback(async () => {
    try {
      const wishlist = await AsyncStorage.getItem("wishlist");
      const parsedWishlist = wishlist ? JSON.parse(wishlist) : [];
      const isInList = parsedWishlist.some((item) => item.id === id);
      setIsInWishlist(isInList);
    } catch (error) {
      console.error(
        "Erro ao verificar se o item está na lista de desejos:",
        error
      );
    }
  }, [id]);

  useEffect(() => {
    checkIfInWishlist(); // Verifica a lista de desejos quando o componente monta ou o ID muda
  }, [checkIfInWishlist]);

  const toggleWishlist = async () => {
    try {
      const wishlist = await AsyncStorage.getItem("wishlist");
      const parsedWishlist = wishlist ? JSON.parse(wishlist) : [];

      let updatedWishlist;
      if (isInWishlist) {
        // Remove o item da lista de desejos
        updatedWishlist = parsedWishlist.filter((item) => item.id !== id);
        console.log("Item removido da lista de desejos:", id);
      } else {
        // Adiciona o item à lista de desejos
        updatedWishlist = [
          ...parsedWishlist,
          { id, nome, imagem, descricao, preco },
        ];
        console.log("Item adicionado à lista de desejos:", {
          id,
          nome,
          imagem,
          descricao,
          preco,
        });
      }

      // Atualiza o AsyncStorage com a lista modificada
      await AsyncStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      // Atualiza o estado local para refletir a alteração
      setIsInWishlist(!isInWishlist);
      console.log("Lista de desejos atualizada:", updatedWishlist);
    } catch (error) {
      console.error(
        "Erro ao adicionar/remover item da lista de desejos:",
        error
      );
    }
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Cover source={imagem} style={styles.imagem} />
        <Card.Content>
          <Title style={styles.nome}>{nome}</Title>
          <Paragraph style={styles.descricao}>{descricao}</Paragraph>
          <Paragraph style={styles.preco}>{preco}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <TouchableOpacity onPress={toggleWishlist}>
            {/* Mudança no ícone do coração */}
            <Ionicons
              name={isInWishlist ? "heart" : "heart-outline"}
              color={isInWishlist ? "red" : "black"}
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={openModal}>
            <Paragraph style={styles.textoAssistir}>Assista o Video</Paragraph>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.containerModal}>
          <View style={styles.conteudoModal}>
            <Video
              source={videoUrl}
              useNativeControls
              resizeMode="contain"
              style={styles.video}
              volume={0.5}
            />
            <TouchableOpacity onPress={closeModal} style={styles.botaoFechar}>
              <Paragraph style={styles.textoFechar}>Fechar</Paragraph>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    height: 445,
  },
  imagem: {
    height: 300,
    resizeMode: "contain",
  },
  nome: {
    fontSize: 18,
    marginTop: 8,
  },
  preco: {
    fontSize: 16,
    color: "#888",
    marginTop: 4,
  },
  descricao: {
    color: "gray",
  },
  textoAssistir: {
    color: "black",
    textTransform: "uppercase",
  },
  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  conteudoModal: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  video: {
    width: "100%",
    height: 200,
  },
  botaoFechar: {
    marginTop: 10,
    alignItems: "center",
  },
  textoFechar: {
    color: "black",
    fontSize: 16,
    textTransform: "uppercase",
  },
});
