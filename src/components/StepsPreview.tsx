import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  main_container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  steps_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
export default function StepsPreview({
  steps,
}: {
  steps: Array<{key: string; value: any}>;
}) {
  return steps && steps.length > 0 ? (
    <View style={styles.main_container}>
      {steps.map(({key, value}, index: number) => (
        <View style={styles.steps_container} key={index}>
          <Text>{key}</Text>
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  ) : null;
}
