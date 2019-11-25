import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';

export default StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(40),
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(10),
    fontSize: Metrics.ratio(16),
    marginBottom: Metrics.ratio(13),
  },
});
