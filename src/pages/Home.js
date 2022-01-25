import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Button } from "../components/Button";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  function handleNewAddSkill() {
    setMySkill((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Richard</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button handleClick={handleNewAddSkill} />
      <Text style={[styles.title, { marginVertical: 48 }]}>My Skill</Text>

      {mySkill.map((skill, index) => (
        <TouchableOpacity
          key={index}
          style={styles.buttonSkill}
          activeOpacity={0.8}
        >
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 16,
    padding: Platform.OS === "ios" ? 16 : 12,
    marginTop: 28,
    borderRadius: 8,
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
