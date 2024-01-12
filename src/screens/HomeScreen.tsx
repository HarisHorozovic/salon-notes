import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import AppLayout from '../components/HOC/AppLayout';
import {getAllNotes} from '../api/notes';
// import Entypo from "@expo/vector-icons/Entypo";
import CustomButton from '../components/CustomButton';
import NoteItem from '../components/NoteItem';
import Input from '../components/Input';
import Text from '../components/Text';
// import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({route, navigation}) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');

  const getNotes = async (page: number = 1, searchText?: string) => {
    setLoading(true);
    try {
      const result = await getAllNotes(page, searchText);

      setNotes(page === 1 ? result : [...notes, ...result]);
    } catch (error) {
      console.log(
        '____________________________________________________________________________________',
      );
      console.log(error);
      console.log(
        '____________________________________________________________________________________',
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getNotes(currentPage).then();
    //   eslint-disable-next-line
  }, [route, currentPage]);

  return (
    <AppLayout>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Input
            style={{flex: 1}}
            placeholder="Search"
            onChangeText={setSearch}
            value={search}
          />
          <CustomButton
            color="default"
            onPress={() => {
              setCurrentPage(1);
              setNotes([]);
              getNotes(1, search).then();
            }}>
            <Text>Search</Text>
            {/*<Ionicons name="search" size={24} color="black" />*/}
          </CustomButton>
        </View>
        {/* Search bar functionality */}
        <CustomButton
          color="primary"
          position="flex-end"
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Text>Add to list</Text>
          {/*<Entypo name="add-to-list" size={24} color="#fff" />*/}
        </CustomButton>
      </View>
      {/*<Button title={"Send req"} onPress={() => } />*/}

      <ScrollView>
        {notes.map((note: any, index: number) => (
          <NoteItem key={index} note={note} />
        ))}
        {loading && <ActivityIndicator size="large" color="#8F00FF" />}
        <CustomButton
          color="default"
          disabled={loading}
          onPress={() => {
            setCurrentPage(currentPage + 1);
          }}
          label="Load more"
        />
      </ScrollView>
    </AppLayout>
  );
};

export default HomeScreen;
