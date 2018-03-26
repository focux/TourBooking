import { lighten } from 'polished';

export default {
  primaryColor: '#7F00FF',
  secondaryColor: '#E100FF',
  white: '#FBFBFB',
  black: '#000000',
  get lightWhite() {
    return lighten(0.5, this.white);
  },
  get lightBlack() {
    return '#e8e8e8';
  },
  font: {
    size: {
      tiny: '1rem',
      small: '1.5rem',
      medium: '2.5rem',
      big: '4.5rem',
      huge: '6rem'
    },
    weight: {
      light: '300',
      regular: undefined,
      bold: '700'
    }
  },
  gap: {
    tiny: '0.5rem',
    small: '1.5rem',
    medium: '2rem',
    big: '3rem',
    huge: '5rem'
  }
};
