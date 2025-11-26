import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      {/* Foto atau avatar */}
      <View style={styles.avatarContainer}>
        <Ionicons name="person-circle-outline" size={110} color="#555" />
      </View>

      {/* Informasi User */}
      <View style={styles.infoBox}>
        <Ionicons name="card-outline" size={20} color="#333" />
        <Text style={styles.text}>ID: 2205010147</Text>
      </View>

      <View style={styles.infoBox}>
        <Ionicons name="person-outline" size={20} color="#333" />
        <Text style={styles.text}>Nama: Kartika Aryana</Text>
      </View>

      <View style={styles.infoBox}>
        <Ionicons name="calendar-outline" size={20} color="#333" />
        <Text style={styles.text}>Tanggal Lahir: 15 Mei 2002</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    backgroundColor: "#f7f7f7",
  },
  avatarContainer: {
    marginBottom: 30,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    width: "85%",
    padding: 15,
    borderRadius: 10,
    marginTop: 12,
    elevation: 2,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
  },
});