import {Image, View} from 'react-native';

export default function ImagePreview({images}: {images: string[]}) {
  return images && images.length > 0 ? (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      {images.map((uri: any, index: number) => (
        <Image
          key={index}
          source={
            typeof uri === 'string'
              ? {uri}
              : require('../../assets/broken-image.png')
          }
          style={{
            height: 80,
            width: undefined,
            aspectRatio: 1,
            marginLeft: 10,
            marginRight: images.length - 1 === index ? 10 : 0,
          }}
        />
      ))}
    </View>
  ) : null;
}
