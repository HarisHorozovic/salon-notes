import {TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Card from '../Card';
import Text from '../Text';
import {noteItemStyle} from './style';

export default function NoteItem({note}: {note: any; key?: string | number}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      containerStyle={{overflow: 'visible'}}
      onPress={() => {
        navigation.navigate('Detail' as any, note);
      }}>
      <Card style={noteItemStyle.note_container}>
        <Text style={noteItemStyle.text}>{note.title}</Text>
        <Image
          source={
            note.images && note.images[0] && typeof note.images[0] === 'string'
              ? {
                  uri: note.images[0] as any,
                }
              : require('../../../assets/broken-image.png')
          }
          style={{height: 80, width: undefined, aspectRatio: 1}}
        />
      </Card>
    </TouchableOpacity>
  );
}
