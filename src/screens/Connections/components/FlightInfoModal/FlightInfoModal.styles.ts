import {StyleSheet, ViewStyle} from 'react-native';
import {colors, responsive} from '@constants';
import textStyles from '@constants/textStyles';

const innerBoxHeight = 118;
const innerMargin = responsive.isSmallScreen ? 0 : 24;
const innerRightMargin = responsive.isSmallScreen ? 0 : 16;

const buttonCommonStyles: ViewStyle = {
  height: 56,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  marginHorizontal: innerMargin,
  marginBottom: 16,
};

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
  boxesRow: {
    flexDirection: 'row',
  },
  leftOuterBox: {
    flex: 1,
  },
  leftInnerBox: {
    height: innerBoxHeight,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.modalBorder,
    backgroundColor: colors.white,
    paddingLeft: innerMargin,
  },
  rightBox: {
    width: 95,
    marginRight: innerRightMargin,
    backgroundColor: colors.priceBg,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceLabel: {
    ...textStyles.priceLabel,
    color: colors.textSecondary,
  },
  oldPrice: {
    ...textStyles.oldPrice,
    color: colors.textPrimary,
  },
  newPrice: {
    ...textStyles.newPrice,
    color: colors.textPrimary,
  },
  transferRow: {
    paddingLeft: innerMargin,
    height: 56,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: colors.modalBorder,
    marginBottom: 20,
  },
  transferLabel: {
    ...textStyles.transferLabel,
    color: colors.textSecondary,
  },
  transferValue: {
    color: colors.transferValue,
  },
  guideButton: {
    ...buttonCommonStyles,
    backgroundColor: colors.whiteBackground,
  },
  guideButtonText: {
    ...textStyles.modalButtonText,
    color: colors.blue,
  },
  detailsButton: {
    ...buttonCommonStyles,
    backgroundColor: colors.blue,
  },
  detailsButtonText: {
    ...textStyles.modalButtonText,
    color: colors.white,
  },
});
