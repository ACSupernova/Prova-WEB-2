import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Navega de volta para a tela anterior
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/LindinhaDancando.gif')}
        style={styles.logo}
      />
      <Text style={styles.message}>
        Parabéns, se você está aqui, conseguiu logar com sucesso!
      </Text>
      
      <TouchableOpacity style={styles.buttonVoltar} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 250,  
    height: 250, 
    marginBottom: 20, 
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4caf50',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonVoltar: {
    backgroundColor: '#2d2563',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
