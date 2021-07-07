import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {iconTypes, colors} from '@constants';
import Icon from '../Icon/Icon';
import styles from './CircledButton.styles';

interface CircledButtonProps {
  onPress?: () => void;
  withShadow?: boolean;
  iconName?: string;
  iconSize?: number;
}

const CircledButton = ({
  onPress = () => {},
  withShadow = true,
  iconName = iconTypes.arrowRight,
  iconSize = 12,
}: CircledButtonProps) => {
  return (
    <View style={[styles.outerCircle, withShadow && styles.outerCircleShadow]}>
      <View
        style={[styles.innerCircle, withShadow && styles.innerCircleShadow]}>
        <TouchableOpacity
          onPress={onPress}
          style={[
            styles.filledCircle,
            withShadow && styles.filledCircleShadow,
          ]}>
          <Icon name={iconName} size={iconSize} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(CircledButton);
