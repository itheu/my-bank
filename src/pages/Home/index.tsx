import React from "react";
import { View, StyleSheet } from "react-native";

const Home = () => {

   return (
    <View style={styles.container}>
      <View style={styles.main}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
