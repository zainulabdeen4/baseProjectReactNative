import React from 'react';
import { Image } from 'react-native';
export default ({ source, ...props }) => {
  if (source && source.uri) {
    let URI = source.uri;
    URI = URI.replace('https', 'http');
    console.log(URI);
    return <Image source={{ uri: URI }} {...props} />;
  } else return <Image source={source} {...props} />;
};
