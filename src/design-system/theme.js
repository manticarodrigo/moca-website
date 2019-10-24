const primary = '#143D6C';
const primaryDark = '#222d5f';
const primaryLight = '#485c7a';
const secondaryLight = '#71cfeb';
const lightBlue = '#FBFAFF;';
const lighterBlue = '#F6FDFF';
const dark = '#485c7a';
const grey = '#6a7e8f';


export const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  // sizes: [0, 4, 8, 16, 32, 64, 100, 128],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 64, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  fonts: {
    Helvetica: 'Helvetica',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    primary, primaryDark, primaryLight, secondaryLight, lightBlue, dark, grey, lighterBlue,
  },
};
