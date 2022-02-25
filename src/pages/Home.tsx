import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import { SkillData } from "../types";


export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  const [greeting, setGretting] = useState("");

  function handleNewAddSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setMySkill((oldState) => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkill((oldState) => oldState.filter((skill) => skill.id !== id));
  }

  useEffect(() => {
    const currentHours = new Date().getHours();

    if (currentHours < 12) {
      setGretting("Good morning");
    } else if (currentHours >= 12 && currentHours <= 17) {
      setGretting("Good afternoon");
    } else {
      setGretting("Good evening");
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Richard</Text>

      <Text style={styles.greetings}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button title={"Adicionar"} onPress={handleNewAddSkill} />

      <Text style={[styles.title, { marginVertical: 48 }]}>My Skill</Text>

      <FlatList
        data={mySkill}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
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
  greetings: {
    color: "#fff",
  },
});
