import {StyleSheet, ViewStyle} from 'react-native';
import {colors, textStyles, responsive} from '@constants';

const innerMargin = responsive.isSmallScreen ? 0 : 24;

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
    margin: 15,
  },
  mainContainer: {
    width: '100%',
  },
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    height: 30,
    padding: 15,
    borderRadius: 5,
    margin: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    margin: 15,
  },
  detailsButton: {
    ...buttonCommonStyles,
    backgroundColor: colors.blue,
    marginTop: 20,
  },
  detailsButtonText: {
    ...textStyles.modalButtonText,
    color: colors.white,
  },
  textInput: {
    marginVertical: 5,
  },
  sectionTitle: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});
