import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

const noteItemStyle = StyleSheet.create({
  note_container: {
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    alignItems: "flex-start",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontWeight: "bold",
  },
});
export default function NoteItem({
  note,
}: {
  note: any;
  key?: string | number;
}) {
  return (
    <TouchableOpacity containerStyle={{ overflow: "visible" }}>
      <View style={[styles.container, noteItemStyle.note_container]}>
        <Text style={noteItemStyle.text}>{note.title}</Text>
        <Image
          source={{
            uri:
              note.images &&
              note.images[0] &&
              typeof note.images[0] === "string"
                ? (note.images[0] as any)
                : ("" as any),
          }}
          style={{ height: 80, width: "auto" }}
        />
      </View>
    </TouchableOpacity>
  );
}
