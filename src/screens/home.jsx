import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function Home({ navigation }) {
  const [username, setUsername] = useState("");

  const handlePress = async () => {
    if (username.trim() === "") {
      Alert.alert("Erro", "Por favor, digite um nome de usuário.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!response.ok) {
        Alert.alert("Erro", "Usuário não encontrado.");
        return;
      }
      const data = await response.json();
      navigation.navigate("UserDetails", { username, repos: data });
    } catch (error) {
      Alert.alert("Erro", "Algo deu errado ao buscar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Github Explorer</Text>
      <Text style={styles.label}>Digite o nome do usuário:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do usuário"
        placeholderTextColor={"#ccc"}
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282c34",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#555",
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#333",
  },
  button: {
    backgroundColor: "#7159c1",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
