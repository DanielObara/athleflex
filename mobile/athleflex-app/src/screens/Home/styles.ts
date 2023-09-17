import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  menuItem: {
    width: 150,
    height: 150,
    backgroundColor: "#1f1e25", // Cor de fundo do quadrado
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  menuText: {
    color: "white", // Cor do texto do menu
    fontSize: 20,
    fontWeight: "bold",
  },
});
