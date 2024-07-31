import React from "react";
import { StyleSheet, Text, TouchableOpacity, Linking } from "react-native";

export function RepoCard({ repo }) {
  const handlePress = () => {
    Linking.openURL(repo.html_url);
  };

  return (
    <TouchableOpacity style={styles.repoCard} onPress={handlePress}>
      <Text style={styles.repoName}>{repo.name}</Text>
      {repo.description && (
        <Text style={styles.repoDescription}>{repo.description}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  repoCard: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  repoName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  repoDescription: {
    color: "#ccc",
    fontSize: 14,
  },
});
