import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  workspace: {
    height: 450,
    alignItems: "center",
    justifyContent: "space-evenly",
   

  },
});

export { styles }; //ou alors export default styles; mais si export default style, pas d'accolades à l'import

