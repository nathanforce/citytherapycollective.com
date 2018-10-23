const fontSize = {
  medium: '1rem',
  large: '2rem',
  xlarge: '6rem',
};
const colors = {
  indigo: index => {
    const shades = [
      '#272E5C',
      '#323875',
      '#435094',
      '#5C6CAD',
      '#6980CB',
      '#8B9DD8',
      '#A6B4E0',
      '#C5D2F4',
      '#D7DFF7',
      '#E4E9F7',
    ];

    return shades[index - 1];
  },
  grey: index => {
    const shades = [
      '#21252A',
      '#343A40',
      '#495057',
      '#868E96',
      '#ADB5BD',
      '#CED4D4',
      '#DEE2E6',
      '#E9ECEF',
      '#F1F3F5',
      '#F8F9FA',
    ];

    return shades[index - 1];
  },
  cyan: index => {
    const shades = ['#3AC9DB', '#66D9E8'];

    return shades[index - 1];
  },
  yellow: index => {
    const shades = ['#FFD43B', '#FFE066'];

    return shades[index - 1];
  },
  red: index => {
    const shades = ['#FA5252', '#FF6A6B'];

    return shades[index - 1];
  },
};

const shadows = {
  a: '0 15px 35px rgba(50,50,93,.1)',
  b: '0 5px 15px rgba(0,0,0,.07)',
};

const media = {
  small: '@media (min-width: 500px)',
  medium: '@media (min-width: 700px)',
  large: '@media (min-width: 1200px)',
};

export const theme = {
  fontSize,
  colors,
  media,
  shadows,
};
