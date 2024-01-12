import {StyleSheet} from 'react-native';

export const formImagePreviewStyles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  image_container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: undefined,
    aspectRatio: 1,
    margin: 5,
  },
});
