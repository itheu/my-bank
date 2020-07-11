import React, { useEffect } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.intro}>Bem vindo ao</Text>
        <Image source={require("../../assets/logo.png")} />
        <Text style={styles.intro}>My Bank</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  intro:{
    color:'#FFF',
    fontSize: 18,
    padding: 10
  },
});

export default Loading;
