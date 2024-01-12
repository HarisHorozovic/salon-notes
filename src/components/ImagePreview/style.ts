import {StyleSheet} from 'react-native';

export const imagePreviewStyle = StyleSheet.create({
  main_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    height: 80,
    width: undefined,
    aspectRatio: 1,
    margin: 5,
  },
});
