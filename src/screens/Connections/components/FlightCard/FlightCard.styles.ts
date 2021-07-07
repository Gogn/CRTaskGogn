import {StyleSheet} from 'react-native';
import {colors} from '@constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
});
