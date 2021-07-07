import React from 'react';
import {View} from 'react-native';
import {CircledButton, FlightInfo} from '@components';
import styles from './FlightCard.styles';
import {ModalData} from '@types';

type FlightCardProps = ModalData & {
  onPress: (modalData: ModalData) => void;
};

const FlightCard = ({
  onPress,
  id,
  destination,
  destinationIata,
  origin,
  originIata,
  time,
}: FlightCardProps) => {
  const handlePress = () => {
    const modalData = {
      id,
      destination,
      destinationIata,
      time,
      origin,
      originIata,
    };
    onPress(modalData);
  };

  return (
    <View style={styles.container}>
      <FlightInfo
        destination={destination}
        destinationIata={destinationIata}
        origin={origin}
        originIata={originIata}
        time={time}
      />
      <CircledButton withShadow={false} onPress={handlePress} />
    </View>
  );
};

export default React.memo(FlightCard);
