import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sobre: {
    backgroundColor: "#262626",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  logo: {
    width: 500,
    height: 500,
    alignSelf: "center",
    marginBottom: -120,
    marginTop: -100,
  },
  logo2: {
    width: 500,
    height: 500,
    alignSelf: "center",
    marginTop: -200,
    marginBottom: -200,
  },
  logo3: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: -100,
    marginBottom: -100,
  },
  textoSobre: {
    fontSize: 18,
    lineHeight: 26,
    color: "white",
    textAlign: "justify",
    fontWeight: "light",
  },
  textoContato: {
    fontSize: 18,
    lineHeight: 26,
    color: "white",
    textAlign: "justify",
    fontWeight: "light",
    marginBottom: 40,
  },
});

export default styles;
