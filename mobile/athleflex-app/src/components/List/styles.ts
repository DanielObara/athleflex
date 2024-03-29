import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  date: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
    backgroundColor: "#1f1e25",
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    backgroundColor: "#31cf67",
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  emptyList: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
