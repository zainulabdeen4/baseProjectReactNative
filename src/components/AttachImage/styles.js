import { StyleSheet } from 'react-native';
import { Metrics } from '../../theme';
export default StyleSheet.create({
  greyPart: {
    width: '40%',
    height: '100%',
    backgroundColor: '#D7D7D7',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  whitePart: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
    paddingLeft: Metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    borderColor: 'black',
    borderWidth: Metrics.ratio(1),
    width: '80%',
    height: Metrics.ratio(40),
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiHeaderCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end', //'space-between',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin,
  },
  circle: {
    backgroundColor: '#C1CD85',
    height: Metrics.ratio(45),
    width: '100%', //Metrics.ratio(50),
    borderRadius: Metrics.ratio(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: Metrics.ratio(1.5),
    borderColor: '#B0C254',
  },
  plus: {
    height: Metrics.ratio(30),
    width: Metrics.ratio(30),
  },
  headerText: {
    color: 'black',
    fontSize: Metrics.ratio(20),
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: Metrics.baseMargin,
    marginBottom: Metrics.smallMargin,
    marginTop: Metrics.baseMargin,
  },
});
