import {DefaultTheme} from 'react-native-paper';

const theme = {
  colors: {
    red: 'red',
  },
  fonts: {
    serif: 'serif',
  },
};

export const PaperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
  },
};

export default theme;
