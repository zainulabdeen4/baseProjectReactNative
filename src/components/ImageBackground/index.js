import React from 'react';
import { ImageBackground } from 'react-native';
export default ({ source, ...props }) => {
  if (source && source.uri) {
    let URI = source.uri;
    URI = URI.replace('https', 'http');
    return <ImageBackground source={{ uri: URI }} {...props} />;
  } else return <ImageBackground source={source} {...props} />;
};
