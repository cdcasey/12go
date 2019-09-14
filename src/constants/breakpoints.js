const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

/**
 * Possible replacement:
 *   breakpoints: {
    values: {
      xs: 0,
      sm: 321,
      md: 600,
      lg: 1024,
      xl: 1920,
    },
  },
 */

export const breakpointsUp = {
  mobileS: '@media screen and (min-width: 320px)',
  mobileM: '@media screen and (min-width: 375px)',
  mobileL: '@media screen and (min-width: 425px)',
  tablet: '@media screen and (min-width: 768px)',
  laptop: '@media screen and (min-width: 1024px)',
  laptopL: '@media screen and (min-width: 1440px)',
  desktop: '@media screen and (min-width: 2560px)',
};

export const breakpointsDown = {
  mobileS: '@media screen and (max-width: 320px)',
  mobileM: '@media screen and (max-width: 375px)',
  mobileL: '@media screen and (max-width: 425px)',
  tablet: '@media screen and (max-width: 768px)',
  laptop: '@media screen and (max-width: 1024px)',
  laptopL: '@media screen and (max-width: 1440px)',
  desktop: '@media screen and (max-width: 2560px)',
};
