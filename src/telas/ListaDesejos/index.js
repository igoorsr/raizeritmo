import React, { useState, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const ListaDesejos = () => {
  const [wishlist, setWishlist] = useState([]);

  const loadWishlist = async () => {
    try {
      const wishlistData = await AsyncStorage.getItem("wishlist");
      if (wishlistData) {
        const parsedWishlist = JSON.parse(wishlistData);
        console.log("Itens carregados do AsyncStorage:", parsedWishlist);
        setWishlist(parsedWishlist);
      } else {
        setWishlist([]);
      }
    } catch (error) {
      console.error("Erro ao carregar lista de desejos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadWishlist();
    }, [])
  );

  const removeItem = async (id) => {
    try {
      const updatedWishlist = wishlist.filter((item) => item.id !== id);
      await AsyncStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      console.log("Item removido:", id);
    } catch (error) {
      console.error("Erro ao remover item:", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemDescricao}>{item.descricao}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
      <TouchableOpacity
        onPress={() => removeItem(item.id)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Ionicons name="time" size={50} color="gray" style={styles.icon} />
          <Text style={styles.emptyMessage}>
            Sua lista de favoritos está vazia
          </Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    width: 350,
    height: "auto",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#888",
  },
  removeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#262626",
    borderRadius: 5,
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  icon: {
    marginBottom: 10,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 10,
    color: "gray",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ListaDesejos;
