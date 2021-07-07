import {StyleSheet, ViewStyle} from 'react-native';
import {colors} from '@constants';

const iconCommonStyle: ViewStyle = {
  position: 'absolute',
  zIndex: 10,
  top: 8,
};

const containerWidth = 60;
const containerHeight = 32;
const containerPadding = 4;
const circleSize = 24;
export const travelDistance =
  containerWidth - 2 * containerPadding - circleSize;

export default StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    padding: containerPadding,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  iconLeft: {
    ...iconCommonStyle,
    left: 8,
  },
  iconRight: {
    ...iconCommonStyle,
    right: 8,
  },
  circle: {
    backgroundColor: colors.blue,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
  },
});
