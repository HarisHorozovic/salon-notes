import React, { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator } from "react-native";
import AppLayout from "../components/HOC/AppLayout";
import { getAllNotes } from "../api/notes";
import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from "../components/CustomButton";
import NoteItem from "../components/NoteItem";

const HomeScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNotes = async (page: number = 1) => {
    setLoading(true);
    try {
      const result = await getAllNotes(page);

      setNotes(result);
    } catch (error) {
      console.log(
        "____________________________________________________________________________________"
      );
      console.log(error);
      console.log(
        "____________________________________________________________________________________"
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getNotes().then();
  }, [navigation]);

  return (
    <AppLayout>
      <View>
        <CustomButton color="primary" position="flex-end">
          <Entypo name="add-to-list" size={24} color="#fff" />
        </CustomButton>
      </View>
      {/*<Button title={"Send req"} onPress={() => } />*/}
      {loading ? (
        <ActivityIndicator size="large" color="#8F00FF" />
      ) : (
        <ScrollView>
          {notes.map((note: any, index: number) => (
            <NoteItem key={index} note={note} />
          ))}
        </ScrollView>
      )}
    </AppLayout>
  );
};

export default HomeScreen;
