import {StyleSheet} from 'react-native';
import {colors, responsive, constants} from '@constants';

const outerCircleSize = constants.circledButtonSize;
const innerCircleSize = responsive.isSmallScreen ? 50 : 68;
const filledCircleSize = responsive.isSmallScreen ? 40 : 52;

export default StyleSheet.create({
  outerCircle: {
    height: outerCircleSize,
    width: outerCircleSize,
    borderRadius: outerCircleSize / 2,
    borderColor: colors.outerCircle,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  outerCircleShadow: {
    shadowOpacity: 0.23,
    shadowRadius: 56,
    shadowColor: colors.blue,
    shadowOffset: {width: 0, height: 2},
  },
  innerCircle: {
    height: innerCircleSize,
    width: innerCircleSize,
    borderRadius: innerCircleSize / 2,
    borderColor: colors.innerCircle,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  innerCircleShadow: {
    shadowOpacity: 0.22,
    shadowRadius: 56,
    shadowColor: colors.blue,
    shadowOffset: {width: 0, height: 2},
  },
  filledCircle: {
    height: filledCircleSize,
    width: filledCircleSize,
    borderRadius: filledCircleSize / 2,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledCircleShadow: {
    shadowOpacity: 0.19,
    shadowRadius: 56,
    shadowColor: colors.inputShadow,
    shadowOffset: {width: 0, height: 2},
  },
});
