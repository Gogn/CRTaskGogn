import React, {useRef} from 'react';
import {View, TouchableWithoutFeedback, Animated} from 'react-native';
import {Icon} from '@components';
import {colors, iconTypes} from '@constants';
import styles, {travelDistance} from './Switch.styles';

interface SwitchProps {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

const Switch = ({toggled, setToggled}: SwitchProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Animated.timing(animation, {
          duration: 200,
          toValue: toggled ? 0 : 1,
          useNativeDriver: true,
        }).start();
        setToggled(!toggled);
      }}>
      <View style={styles.container}>
        <View style={styles.iconLeft}>
          <Icon
            name={iconTypes.list}
            size={16}
            color={toggled ? colors.blue : colors.white}
          />
        </View>
        <View style={styles.iconRight}>
          <Icon
            name={iconTypes.map}
            size={16}
            color={toggled ? colors.white : colors.blue}
          />
        </View>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, travelDistance],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
