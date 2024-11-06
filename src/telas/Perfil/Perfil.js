import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Botao from "../../../src/componentes/Botao";
import logo from "../../../assets/Imagens/logoNome.png";

const Perfil = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [imagem, setImagem] = useState(null);

  const pegarImagem = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      showsCameraControls: true,
    });

    if (!result.canceled) {
      setImagem(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!nome || !email || !telefone || !senha || !imagem) {
      Alert.alert("Erro", "Por favor, preencha todos os campos e tire a foto.");
      return;
    }

    setNome("");
    setEmail("");
    setTelefone("");
    setSenha("");
    setImagem(null);

    Alert.alert("Informação", "As informações foram salvas com sucesso.");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <TouchableOpacity onPress={pegarImagem} style={styles.imageWrapper}>
        {imagem ? (
          <Image source={{ uri: imagem }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Imagem</Text>
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />
      <Botao textoBotao="Salvar" acaoBotao={handleSave} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    padding: 20,
  },
  logo: {
    marginTop: -300,
    width: 500,
    height: 500,
    marginBottom: -200,
    resizeMode: "contain",
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 5,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  placeholderText: {
    fontSize: 15,
    color: "gray",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Perfil;
