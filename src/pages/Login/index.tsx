import React from "react";
import { View, StyleSheet, SafeAreaView, Text, TextInput, Image } from "react-native";
import { droidSafeArea } from "../styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  function navegarParaMenu() {
    navigation.navigate("Menu");
  }

   return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <View style={styles.main}>
      <Image style={styles.imgLogo} source={require("../../assets/logo.png")} />
          <Text style={styles.inputTitle}>CPF</Text>
          <TextInput style={styles.input} />
          <Text style={styles.inputTitle}>Senha</Text>
          <TextInput style={styles.input} />

          <RectButton style={[styles.btn]}>
            <Text style={styles.btnText} onPress={navegarParaMenu}>Entrar</Text>
          </RectButton>
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
  imgLogo: {
    marginTop: 30,
    alignSelf: 'center'
  },
  inputTitle: {
    color: '#939EDD',
    paddingBottom: 10,
    fontSize: 18,
    alignSelf: 'center',
    width: '65%',
    paddingTop: 40
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#939EDD',
    width: '65%',
    height: 40,
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: "#939EDD",
    maxWidth: 170,
    width: 170,
    height: 45,
    borderRadius: 15,
    marginTop: 50,
  },
  btnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
    paddingTop: 10,
  },
});

export default Login;
