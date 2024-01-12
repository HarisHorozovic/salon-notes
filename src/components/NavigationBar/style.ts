import {StyleSheet} from 'react-native';

export const navigationBarStyles = StyleSheet.create({
  nav: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 0,
    margin: 0,
  },
  nav_item: {marginHorizontal: 5},
});
