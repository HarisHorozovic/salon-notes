import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_base: {
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 3,
    paddingHorizontal: 5,
  },
  text_area: {height: 100, textAlignVertical: 'top'},
  link: {
    color: 'blue',
  },
  card: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 20,
  },
});

export const colors: any = {
  light: {
    backgroundColor: '#fff',
    color: '#000',
    borderColor: '#ccc',
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff',
    borderColor: '#ccc',
  },
};

export default styles;
