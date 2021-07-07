import {StyleSheet} from 'react-native';
import {colors, textStyles} from '@constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  marker: {
    alignItems: 'center',
  },
  iata: {
    ...textStyles.mapIata,
    color: colors.blue,
  },
  city: {
    ...textStyles.mapCity,
    color: colors.textSecondary,
  },
});
