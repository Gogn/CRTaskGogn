import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  bagWrapper: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'center',
  },
  checkboxWrapper: {
    ...Platform.select({
      ios: {
        borderWidth: 1,
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'lightgray',
      },
    }),
  },
  iconWrapper: {
    marginHorizontal: 15,
  },
  baggageElementWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  size: {
    color: 'gray',
    fontSize: 12,
  },
});
