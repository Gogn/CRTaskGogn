import {StyleSheet} from 'react-native';
import {colors, textStyles} from '@constants';

export default StyleSheet.create({
  headerText: {
    ...textStyles.header,
    color: colors.textPrimary,
  },
  headerHighlightedText: {
    ...textStyles.headerBold,
    color: colors.blue,
  },
});
