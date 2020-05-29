const mainColors = {
  green1: '#0BCAD4',
  green2: '#edfcfd',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092af',
  grey1: '#7D8797',
  grey2: '#e9e9e9',
  grey3: '#C3CAD6',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    tertiary: mainColors.dark3,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  photo: {
    border: mainColors.grey3,
  },
  category: {
    background: mainColors.green2,
  },
};
