import {StyleSheet} from 'react-native';

export const noteItemStyle = StyleSheet.create({
  note_container: {
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 20,
    padding: 10,
    alignItems: 'flex-start',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
  },
});
