import {StyleSheet} from 'react-native';
import {colors, textStyles} from '@constants';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  city: {
    ...textStyles.autoCompleteCity,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  airportName: {
    ...textStyles.autoCompleteAirport,
    color: colors.textSecondary,
  },
});
