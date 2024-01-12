import {colors} from '../../styles';
import Text from '../Text';

export default function ErrorText({text}: {text: string}) {
  return (
    <Text style={{color: colors.global.danger, fontSize: 10}}>{text}</Text>
  );
}
