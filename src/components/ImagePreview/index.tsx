import {Image, TouchableOpacity, View} from 'react-native';
import {imagePreviewStyle} from './style';
import {useState} from 'react';
import ImagePreviewModal from '../ImagePreviewModal';

export default function ImagePreview({images}: {images: string[]}) {
  const [imageIndex, setImageIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return images && images.length > 0 ? (
    <>
      <View style={imagePreviewStyle.main_container}>
        {images.map((uri: any, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setImageIndex(index);
              setVisible(true);
            }}>
            <Image
              source={
                typeof uri === 'string'
                  ? {uri}
                  : require('../../../assets/broken-image.png')
              }
              style={imagePreviewStyle.image}
            />
          </TouchableOpacity>
        ))}
      </View>
      <ImagePreviewModal
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
        images={images.map((img: string, index: number) => ({
          src: img,
          index,
        }))}
        imageIndex={imageIndex}
      />
    </>
  ) : null;
}
