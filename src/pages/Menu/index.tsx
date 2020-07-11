import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import { droidSafeArea } from "../styles";
import HeaderComponent from "../../components/Header";


const Menu = () => {
   return (
    <SafeAreaView style={styles.droidSafeArea}>
      <HeaderComponent />
      <View style={styles.container}>
        <View style={styles.main}>
            <Text style={{color: '#FFF'}}>Menu</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  droidSafeArea,
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: "#000",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Menu;
