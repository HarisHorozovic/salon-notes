import {View} from 'react-native';
import {stepsPreviewStyle} from './style';
import Text from '../Text';

export default function StepsPreview({
  steps,
}: {
  steps: Array<{key: string; value: any}>;
}) {
  return steps && steps.length > 0 ? (
    <View style={stepsPreviewStyle.main_container}>
      {steps.map(({key, value}, index: number) => (
        <View style={stepsPreviewStyle.steps_container} key={index}>
          <Text>{key}</Text>
          <Text>{value}</Text>
        </View>
      ))}
    </View>
  ) : null;
}
