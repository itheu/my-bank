import React from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";

const HeaderComponent = () => {

   return (
        <View style={styles.fundo}> 
            
        </View>
  );
};

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: '#575FAF',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40
  }
});

export default HeaderComponent;
