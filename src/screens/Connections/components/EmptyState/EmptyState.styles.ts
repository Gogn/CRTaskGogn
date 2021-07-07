import {StyleSheet} from 'react-native';
import {colors, textStyles} from '@constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.whiteBackground,
  },
  contentContiner: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTitle: {
    ...textStyles.emptyTitle,
    color: colors.textPrimary,
    marginBottom: 8,
    marginTop: 24,
    textAlign: 'center',
  },
  emptyDescription: {
    ...textStyles.emptyDescription,
    color: colors.textSecondary,
    textAlign: 'center',
    maxWidth: 256,
  },
});
