import {Image, View} from 'react-native';
import {imagePreviewStyle} from './style';

export default function ImagePreview({images}: {images: string[]}) {
  return images && images.length > 0 ? (
    <View style={imagePreviewStyle.main_container}>
      {images.map((uri: any, index: number) => (
        <Image
          key={index}
          source={
            typeof uri === 'string'
              ? {uri}
              : require('../../../assets/broken-image.png')
          }
          style={imagePreviewStyle.image}
        />
      ))}
    </View>
  ) : null;
}
