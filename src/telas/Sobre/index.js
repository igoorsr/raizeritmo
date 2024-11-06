import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

import Texto from "../../componentes/Texto";
import Styles from "./estilos";

export default function Index({ textos }) {
  return (
    <ScrollView style={Styles.sobre}>
      <Image
        source={textos.logo}
        style={Styles.logo}
        resizeMode="contain"
      ></Image>
      <Texto style={Styles.textoSobre}>{textos.descricao}</Texto>
      <Image
        source={textos.logo2}
        style={Styles.logo2}
        resizeMode="contain"
      ></Image>
      <Texto style={Styles.textoSobre}>{textos.descricao2}</Texto>
      <Image
        source={textos.logo3}
        style={Styles.logo3}
        resizeMode="contain"
      ></Image>
      <Texto style={Styles.textoContato}>{textos.contato}</Texto>
    </ScrollView>
  );
}
