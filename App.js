import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class App extends React.Component {

  onClick = () => {
    console.warn('Teste 123.')
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.logo} source={require('./images/logo.png')} />
        <Text style={styles.title}>Simular Renda Fixa</Text>
        <Text style={styles.title}>Pós-Fixado</Text>

        <View style={styles.box}>
          <View style={styles.item}>
            <Text style={styles.label}>Quanto você gostaria de aplicar? *</Text>
            <TextInput style={styles.input} placeholder='R$' />
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Qual a data de vencimento do investimento? *</Text>
            <TextInput style={styles.input} placeholder='dia/mês/ano' />
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Qual o percentual do CDI do investimento? *</Text>
            <TextInput style={styles.input} placeholder='100%' />
          </View>

          <View style={styles.item}>
            <Button
              style={styles.button}
              onPress={this.onClick}
              title="Simular"
              accessibilityLabel="Simular"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center'
  },
  box: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 80,
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    width: 45,
    height: 34,
    alignItems: 'center',
    marginTop: 40
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  label: {
    color: '#666',
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    color: '#333',
    textAlign: 'center',
    fontSize: 42,
    height: 40
  },
  button: {
    fontSize: 16,
    height: 50,
    backgroundColor: '#c3cac9'
  }
});
