import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';

export default StyleSheet.create({
  slectCat: {
    borderColor: '#505051',
    borderWidth: Metrics.ratio(1.7),
    backgroundColor: 'white',
    width: Metrics.screenWidth * 0.9,
    height: Metrics.ratio(40),
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(10),
    flexDirection: 'row',
    marginBottom: Metrics.ratio(13),
    alignSelf: 'center',
  },
  img: {
    height: Metrics.ratio(16),
    width: Metrics.ratio(16),
    marginHorizontal: Metrics.smallMargin,
  },
  pickerProps: { color: '#F7B9A2' },
});
