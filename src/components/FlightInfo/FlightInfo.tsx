import React from 'react';
import {View, Text} from 'react-native';
import {iconTypes, colors} from '@constants';
import {Icon} from '@components';
import styles from './FlightInfo.styles';

interface FlightInfoProps {
  destination: string;
  destinationIata: string;
  time: string;
  origin: string;
  originIata: string;
}

const FlightInfo = ({
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightInfoProps) => {
  return (
    <View>
      <View style={styles.flightInfoRow}>
        <View>
          <Text style={styles.iata}>{originIata}</Text>
          <Text numberOfLines={1} style={styles.city}>
            {origin}
          </Text>
        </View>
        <Icon
          name={iconTypes.arrowRight}
          size={12}
          color={colors.black}
          style={styles.arrowIcon}
        />
        <View>
          <Text style={[styles.iata, styles.destinationIata]}>
            {destinationIata}
          </Text>
          <Text numberOfLines={1} style={styles.city}>
            {destination}
          </Text>
        </View>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

export default React.memo(FlightInfo);
