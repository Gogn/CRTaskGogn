import {StyleSheet, TextStyle} from 'react-native';
import {colors, textStyles, responsive} from '@constants';

const headerBlue = responsive.isSmallScreen ? 170 : 180;
const headerWhite = responsive.isSmallScreen ? 60 : 74;

const inputInnerPadding = 24;
const inputOuterSpace = 24;
export const inputIconSize = 24;
const inputLeftMargin = 28;
const autoCompleteListLeftPadding =
  inputInnerPadding + inputLeftMargin + inputIconSize;
const inputExpandedListArea = 280;

const labelCommonStyles: TextStyle = {
  color: colors.inputLabel,
  position: 'absolute',
  left: inputLeftMargin,
  minWidth: 70,
};

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.blue,
  },
  headerTop: {
    backgroundColor: colors.blue,
    height: headerBlue,
    paddingHorizontal: inputOuterSpace,
    paddingTop: 16,
  },
  headerTopShrinked: {
    height: 60,
  },
  headerBottom: {
    backgroundColor: colors.whiteBackground,
    height: headerWhite,
  },
  headerBottomExpanded: {
    height: headerWhite + inputExpandedListArea,
  },
  inputContainer: {
    backgroundColor: colors.whiteBackground,
    height: headerWhite,
    alignItems: 'center',
    marginHorizontal: inputOuterSpace,
    borderRadius: 8,
    position: 'absolute',
    bottom: headerWhite / 2,
    right: 0,
    left: 0,
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowColor: colors.inputShadow,
    shadowOffset: {width: 0, height: 8},
    elevation: 8,
  },
  autoCompleteList: {
    paddingRight: inputInnerPadding,
    paddingLeft: autoCompleteListLeftPadding,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: headerWhite,
    paddingHorizontal: inputInnerPadding,
  },
  inputExpandedList: {
    height: inputExpandedListArea,
    width: '100%',
  },
  inputContainerExpanded: {
    height: headerWhite + inputExpandedListArea,
  },
  textInputContainer: {
    height: 40,
    justifyContent: 'flex-end',
    flex: 1,
    paddingLeft: inputLeftMargin,
  },
  input: {
    ...textStyles.input,
    color: colors.textPrimary,
    height: 23,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  inputIata: {
    ...textStyles.inputIata,
  },
  crossContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.clearButtonBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelStart: {
    ...textStyles.input,
    ...labelCommonStyles,
  },
  labelEnd: {
    ...textStyles.inputFloatingLabel,
    ...labelCommonStyles,
  },
});
