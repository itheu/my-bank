import { Platform } from "react-native";

const droidSafeArea = {
  flex: 1,
  backgroundColor: "#FFF",
  paddingTop: Platform.OS === "android" ? 25 : 0,
};

export default droidSafeArea;
