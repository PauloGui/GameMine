import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View} from 'react-native';
import params from './src/params'
import Field from './src/components/Field'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Iniciando o Mines</Text>
      <Text>Tamanho da grade:
          {params.getRowsAmount()}x{params.getCollumnsAmount()}  </Text>
      <Field />
      <Field opened />
      <Field opened nearMines={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
