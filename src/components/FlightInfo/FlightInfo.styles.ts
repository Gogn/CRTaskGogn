import {StyleSheet} from 'react-native';
import {colors, textStyles, responsive} from '@constants';

export default StyleSheet.create({
  iata: {
    ...textStyles.flightCardIata,
    color: colors.textPrimary,
  },
  destinationIata: {
    color: colors.destinationIata,
  },
  city: {
    ...textStyles.flightCardCity,
    color: colors.textSecondary,
    maxWidth: responsive.isSmallScreen ? 50 : 72,
  },
  time: {
    ...textStyles.flightCardTime,
    color: colors.textPrimary,
  },
  flightInfoRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  arrowIcon: {
    marginTop: 6,
    marginHorizontal: 16,
  },
});
