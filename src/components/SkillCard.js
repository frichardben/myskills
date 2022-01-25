import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function SkillCard({ skill, id }) {
  return (
    <TouchableOpacity key={id} style={styles.buttonSkill} activeOpacity={0.8}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
