import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#131016",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    color: "#6b6b6b",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#31cf67",
    width: 260,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  stopButton: {
    backgroundColor: "#e23c44",
    marginTop: 10,
    width: 260,
    height: 56,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  stopButtonText: {
    color: "#fff",
    fontSize: 24,
  },
});
