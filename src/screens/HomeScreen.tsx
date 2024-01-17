import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import AppLayout from '../components/HOC/AppLayout';
import {getAllNotes} from '../api/notes';
import CustomButton from '../components/CustomButton';
import NoteItem from '../components/NoteItem';
import Input from '../components/Input';
import Icon from '../components/Icon';
import {showMessage} from 'react-native-flash-message';
import {colors} from '../styles';

const HomeScreen = ({navigation}) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const isDarkMode = useColorScheme() === 'dark';

  const getNotes = async (page: number = 1, searchText?: string) => {
    setLoading(true);
    try {
      const result = await getAllNotes(page, searchText);

      setNotes(page === 1 ? result : [...notes, ...result]);
    } catch (error) {
      showMessage({
        message: 'Something went wrong getting notes, please try again',
        type: 'danger',
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getNotes(currentPage, search).then();
    //   eslint-disable-next-line
  }, [currentPage]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setNotes([]);
      getNotes(1).then();
    });

    return unsubscribe;
    //   eslint-disable-next-line
  }, [navigation]);

  return (
    <AppLayout>
      <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={{flex: 1, position: 'relative'}}>
            <Input
              style={{
                flex: 1,
                height: 30,
                lineHeight: 30,
                fontSize: 12,
                paddingVertical: 2,
              }}
              placeholder="Search"
              onChangeText={setSearch}
              value={search}
            />
            <TouchableOpacity
              onPress={() => {
                setNotes([]);
                setSearch('');
                getNotes(1, '').then();
              }}
              style={{position: 'absolute', right: 10, bottom: 12}}>
              <Icon iconProvider="fontawesome" name="remove" />
            </TouchableOpacity>
          </View>
          <CustomButton
            color="default"
            onPress={() => {
              setCurrentPage(1);
              setNotes([]);
              getNotes(1, search).then();
            }}>
            <Icon
              iconProvider="ionic"
              name="search"
              color={
                isDarkMode
                  ? colors.dark.button.default.color
                  : colors.light.button.default.color
              }
            />
          </CustomButton>
        </View>
        {/* Search bar functionality */}
        <CustomButton
          color="primary"
          position="flex-end"
          onPress={() => {
            navigation.navigate('Detail');
          }}>
          <Icon
            iconProvider="entypo"
            name="add-to-list"
            size={16}
            color={
              isDarkMode
                ? colors.dark.button.primary.color
                : colors.light.button.primary.color
            }
          />
        </CustomButton>
      </View>
      {/*<Button title={"Send req"} onPress={() => } />*/}

      <ScrollView>
        {notes?.map((note: any, index: number) => (
          <NoteItem key={index} note={note} getNotes={getNotes} />
        ))}
        {loading && (
          <ActivityIndicator size="large" color={colors.dark.button.primary} />
        )}
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
