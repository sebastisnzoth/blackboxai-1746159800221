import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navigate to main app screen or home after login
      navigation.replace('Home');
    } catch (error) {
      const err = error as Error;
      Alert.alert('Error', err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        ¿No tienes cuenta? Regístrate
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  registerText: {
    marginTop: 15,
    color: '#0a7ea4',
    textAlign: 'center',
  },
});
