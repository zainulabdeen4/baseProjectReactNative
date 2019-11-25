import { StyleSheet } from 'react-native';
import utils from '../../utils';
import { Metrics } from '../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingBottom: utils.isPlatformAndroid()
    //   ? 0
    //   : Metrics.ratio(36),
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    height:
      Metrics.screenHeight < Metrics.screenWidth
        ? Metrics.screenHeight - Metrics.ratio(28, 0)
        : Metrics.screenWidth - Metrics.ratio(28, 0),
    width:
      Metrics.screenHeight > Metrics.screenWidth
        ? Metrics.screenHeight
        : Metrics.screenWidth,
    left: 0,
    right: 0,
  },
  close: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
  },
  closeContainer: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
  },
});
