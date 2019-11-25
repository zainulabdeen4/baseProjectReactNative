import React from 'react';
import ImageLoading from 'react-native-image-progress';
import { ImageBackground } from 'react-native';
export default ({ source, ...props }) => {
  if (source && source.uri) {
    let URI = source.uri;
    URI = URI.replace('https', 'http');
    return <ImageLoading source={{ uri: URI }} {...props} />;
  } else return <ImageLoading source={source} {...props} />;
};
