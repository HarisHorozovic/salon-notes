import {
  Dimensions,
  Image,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {formImagePreviewStyles} from '../FormImagePreview/style.ts';
import Icon from '../Icon';
import React from 'react';
import {colors} from '../../styles';

export default function ImagePreviewModal({
  images,
  imageIndex,
  visible,
  onRequestClose,
}: ImagePreviewModalProps) {
  const dimensions = Dimensions.get('window');
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 22,
        backgroundColor: isDarkMode
          ? colors.dark.backgroundColor
          : colors.light.backgroundColor,
        flex: 1,
        top: dimensions.height / 200,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: dimensions.width - dimensions.width / 20,
        height: dimensions.height - dimensions.height / 5,
        display: visible ? 'flex' : 'none',
      }}>
      {images.map(img => {
        return (
          <Image
            key={img.index}
            alt={'image_' + img.index}
            source={
              typeof img.src === 'string'
                ? {
                    uri: img.src,
                  }
                : require('../../../assets/broken-image.png')
            }
            style={[
              formImagePreviewStyles.image,
              {
                display: imageIndex === img.index ? 'flex' : 'none',
                width: dimensions.width * 1.3,
                height: undefined,
                objectFit: 'scale-down',
              },
            ]}
          />
        );
      })}
      <TouchableOpacity
        onPress={() => {
          onRequestClose();
        }}
        style={{position: 'absolute', right: 10, top: 0}}>
        <Icon iconProvider="fontawesome" name="remove" size={24} />
      </TouchableOpacity>
    </View>
  );
}

export type ImagePreviewModalProps = {
  visible?: boolean;
  onRequestClose: () => void;
  images: Array<ImageItem>;
  imageIndex: number;
};

export type ImageItem = {src: string; index: number};
