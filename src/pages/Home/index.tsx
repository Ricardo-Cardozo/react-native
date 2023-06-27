import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  const handleClearInputs = () => {
    setName('');
    setLastName('');
    setClick(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome</Text>
      <TextInput
        placeholderTextColor={'#838689'}
        placeholder="Digite seu nome..."
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
      />
      <Text style={styles.text}>Sobrenome</Text>
      <TextInput
        placeholderTextColor={'#838689'}
        placeholder="Digite seu sobrenome..."
        style={styles.input}
        onChangeText={text => setLastName(text)}
        value={lastName}
      />
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.textButton}>Enviar</Text>
      </TouchableOpacity>
      {click ? (
        <Text style={styles.message}>
          Seu nome é: {name} {lastName}
        </Text>
      ) : (
        <Text style={styles.message}>Por favor, digite os campos acima!</Text>
      )}
      <TouchableOpacity onPress={handleClearInputs} style={styles.buttonClear}>
        <Text style={styles.textClear}>Limpar Campos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  input: {
    backgroundColor: '#2d2d2d',
    color: '#d3d3d3',
    width: '100%',
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },

  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#e89d10',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
  },

  message: {
    color: '#fa3419',
    fontSize: 20,
    marginTop: 50,
    textAlign: 'center',
  },

  buttonClear: {
    width: '100%',
    marginTop: 20,
    backgroundColor: 'transparent',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textClear: {
    color: '#0ccaba',
    fontSize: 20,
  },
});
