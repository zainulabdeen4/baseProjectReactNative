import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
export default StyleSheet.create({
  indicatorContainer: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: Metrics.ratio(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: Metrics.ratio(1.2),
  },
  calendar: {
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    borderRadius: Metrics.ratio(7),
    shadowColor: 'rgba(0,0,0,0.6)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
});
